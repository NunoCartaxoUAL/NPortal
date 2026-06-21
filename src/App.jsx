import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import HomelabView from './views/HomelabView.jsx';
import ProfileView from './views/ProfileView.jsx';
import ProjectsView from './views/ProjectsView.jsx';

export default function App() {
  const [activeView, setActiveView] = useState('profile');

  const activePage = {
    profile: <ProfileView />,
    projects: <ProjectsView />,
    homelab: <HomelabView />
  }[activeView];

  return (
    <div className="app-shell">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="main-content">{activePage}</main>
    </div>
  );
}
