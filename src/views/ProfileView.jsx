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
        <div>
          <h3>{entry.title}</h3>
          <span>{entry.organization} - {entry.location}</span>
        </div>
        <time>{entry.date}</time>
      </div>
      <p>{entry.summary}</p>
      {entry.highlights?.length ? (
        <ul>
          {entry.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
      <TagList tags={entry.tags} />
    </section>
  );
}

function LanguageLevels({ levels }) {
  if (!levels?.length) {
    return null;
  }

  return (
    <section className="language-panel" aria-label="Language levels">
      {levels.map((level) => (
        <div className="language-row" key={level.label}>
          <div>
            <strong>{level.label}</strong>
            <span>{level.detail}</span>
          </div>
          <div className="language-meter" aria-hidden="true">
            <span style={{ width: `${level.value}%` }} />
          </div>
        </div>
      ))}
    </section>
  );
}

function CertificationList({ certifications }) {
  if (!certifications?.length) {
    return null;
  }

  return (
    <section className="cert-panel" aria-label="Certifications">
      {certifications.map((certification) => (
        <span key={certification.title}>
          <time>{certification.date}</time>
          <strong>{certification.title}</strong>
          <em>{certification.issuer}</em>
        </span>
      ))}
    </section>
  );
}

function ProfileCards({ cards }) {
  if (!cards?.length) {
    return null;
  }

  return (
    <div className="profile-card-grid">
      {cards.map((card) => (
        <section className="profile-card" key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </section>
      ))}
    </div>
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
        {activeSection.intro ? <p>{activeSection.intro}</p> : null}
        <LanguageLevels levels={activeSection.levels} />
        <CertificationList certifications={activeSection.certifications} />
        <ProfileCards cards={activeSection.cards} />
        {activeSection.entries?.length ? (
            <div className="cv-list">
              {activeSection.entries.map((entry) => (
                <CvEntry entry={entry} key={entry.title} />
              ))}
            </div>
        ) : null}
      </article>
    </section>
  );
}
