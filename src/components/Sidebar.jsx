import { BriefcaseBusiness, FolderKanban, Server } from 'lucide-react';
import React from 'react';

const views = [
  { id: 'profile', label: 'Profile', icon: BriefcaseBusiness },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'homelab', label: 'Homelab', icon: Server }
];

export default function Sidebar({ activeView, onViewChange }) {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <div className="logo" aria-label="NPortal">
        N
      </div>
      <nav className="side-nav">
        {views.map(({ id, label, icon: Icon }) => (
          <button
            className={activeView === id ? 'side-button active' : 'side-button'}
            key={id}
            onClick={() => onViewChange(id)}
            type="button"
            aria-label={label}
            title={label}
          >
            <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>
        ))}
      </nav>
    </aside>
  );
}
