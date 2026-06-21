import React, { useEffect, useMemo, useState } from 'react';
import SectionTabs from '../components/SectionTabs.jsx';
import { content } from '../data/content.js';

function TagList({ tags }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function CvEntry({ entry }) {
  return (
    <section className="cv-entry">
      <div className="cv-entry-head">
        <h3>{entry.title}</h3>
        <span>{entry.meta}</span>
      </div>
      <p>{entry.summary}</p>
      {entry.points?.length ? (
        <ul>
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
      <TagList tags={entry.tags} />
    </section>
  );
}

export default function ProfileView({ language }) {
  const profile = content[language].profile;
  const tabs = useMemo(() => profile.sections.map((section) => section.title), [profile.sections]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const activeSection =
    profile.sections.find((section) => section.title === activeTab) ?? profile.sections[0];

  useEffect(() => {
    if (!tabs.includes(activeTab)) {
      setActiveTab(tabs[0]);
    }
  }, [activeTab, tabs]);

  return (
    <section className="page-section" aria-labelledby="profile-title">
      <header className="top-panel">
        <h1 id="profile-title">{profile.title}</h1>
        <SectionTabs
          activeTab={activeTab}
          ariaLabel="Profile sections"
          items={tabs}
          onChange={setActiveTab}
        />
      </header>

      <article
        className="paper"
        id={`panel-${activeSection.title}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeSection.title}`}
      >
        <h2>{activeSection.title}</h2>
        {activeSection.entries?.length ? (
          <div className="cv-list">
            {activeSection.entries.map((entry) => (
              <CvEntry entry={entry} key={entry.title} />
            ))}
          </div>
        ) : (
          activeSection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        )}
      </article>
    </section>
  );
}
