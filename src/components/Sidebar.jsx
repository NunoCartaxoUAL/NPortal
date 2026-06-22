import { BriefcaseBusiness, ChartNoAxesCombined, FolderKanban, Server } from 'lucide-react';
import React from 'react';
import { content } from '../data/content.js';

const views = [
  { id: 'profile', label: 'Profile', icon: BriefcaseBusiness },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'homelab', label: 'Homelab', icon: Server },
  { id: 'evidence', label: 'Evidence', icon: ChartNoAxesCombined }
];

export default function Sidebar({ activeView, language, onLanguageToggle, onViewChange }) {
  const labels = content[language].nav;
  const nextLanguage = language === 'en' ? '日本語' : 'English';

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
            aria-label={labels[id] ?? label}
            title={labels[id] ?? label}
          >
            <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
            <span>{labels[id] ?? label}</span>
          </button>
        ))}
      </nav>
      <button
        className="language-toggle"
        onClick={onLanguageToggle}
        type="button"
        aria-label={`Switch language to ${nextLanguage}`}
        title={`Switch language to ${nextLanguage}`}
      >
        {language === 'en' ? 'JA' : 'EN'}
      </button>
    </aside>
  );
}
