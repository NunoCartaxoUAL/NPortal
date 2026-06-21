import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import HomelabView from './views/HomelabView.jsx';
import ProfileView from './views/ProfileView.jsx';
import ProjectsView from './views/ProjectsView.jsx';

function getInitialLanguage() {
  const storedLanguage = window.localStorage.getItem('nportal-language');

  if (storedLanguage === 'en' || storedLanguage === 'ja') {
    return storedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en';
}

export default function App() {
  const [activeView, setActiveView] = useState('profile');
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const activePage = {
    profile: <ProfileView language={language} />,
    projects: <ProjectsView language={language} />,
    homelab: <HomelabView language={language} />
  }[activeView];

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
        onViewChange={setActiveView}
      />
      <main className="main-content">{activePage}</main>
    </div>
  );
}
