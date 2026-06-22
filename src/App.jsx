import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import HomelabView from './views/HomelabView.jsx';
import ProfileView from './views/ProfileView.jsx';
import ProjectsView from './views/ProjectsView.jsx';
import TestView from './views/TestView.jsx';

const views = ['profile', 'projects', 'homelab', 'test'];

function getInitialView() {
  const hashView = window.location.hash.replace('#', '');

  return views.includes(hashView) ? hashView : 'profile';
}

function getInitialLanguage() {
  const storedLanguage = window.localStorage.getItem('nportal-language');

  if (storedLanguage === 'en' || storedLanguage === 'ja') {
    return storedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en';
}

export default function App() {
  const [activeView, setActiveView] = useState(getInitialView);
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    function handleHashChange() {
      const hashView = window.location.hash.replace('#', '');

      if (views.includes(hashView)) {
        setActiveView(hashView);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activePage = {
    profile: <ProfileView language={language} />,
    projects: <ProjectsView language={language} />,
    homelab: <HomelabView language={language} />,
    test: <TestView language={language} />
  }[activeView];

  function changeView(nextView) {
    setActiveView(nextView);
    window.history.replaceState(null, '', `#${nextView}`);
  }

  function toggleLanguage() {
    setLanguage((currentLanguage) => {
      const nextLanguage = currentLanguage === 'en' ? 'ja' : 'en';
      window.localStorage.setItem('nportal-language', nextLanguage);
      return nextLanguage;
    });
  }

  return (
    <div className="app-shell">
      <Sidebar
        activeView={activeView}
        language={language}
        onLanguageToggle={toggleLanguage}
        onViewChange={changeView}
      />
      <main className="main-content">{activePage}</main>
    </div>
  );
}
