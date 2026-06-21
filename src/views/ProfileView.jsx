import React, { useMemo, useState } from 'react';
import SectionTabs from '../components/SectionTabs.jsx';
import { profileSections } from '../data/content.js';

export default function ProfileView() {
  const tabs = useMemo(() => Object.keys(profileSections), []);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="page-section" aria-labelledby="profile-title">
      <header className="top-panel">
        <h1 id="profile-title">Profile</h1>
        <SectionTabs
          activeTab={activeTab}
          ariaLabel="Profile sections"
          items={tabs}
          onChange={setActiveTab}
        />
      </header>

      <article
        className="paper"
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        <h2>{activeTab}</h2>
        {profileSections[activeTab].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}
