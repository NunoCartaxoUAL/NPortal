import React, { useEffect, useMemo, useState } from 'react';
import SectionTabs from '../components/SectionTabs.jsx';
import { content } from '../data/content.js';

function FormattedText({ text }) {
  return text.split('**').map((part, index) => (
    index % 2 === 1 ? <strong key={`${part}-${index}`}>{part}</strong> : part
  ));
}

function TagList({ label, tags }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <p className="tag-list">
      <strong>{label}</strong>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </p>
  );
}

function CvEntry({ entry, tagLabel }) {
  return (
    <section className="cv-entry">
      <div className="cv-entry-head">
        <div>
          <h3>{entry.title}</h3>
          <span>{entry.organization} - {entry.location}</span>
        </div>
        <time>{entry.date}</time>
      </div>
      <p>
        <FormattedText text={entry.summary} />
      </p>
      {entry.highlights?.length ? (
        <ul>
          {entry.highlights.map((point) => (
            <li key={point}>
              <FormattedText text={point} />
            </li>
          ))}
        </ul>
      ) : null}
      <TagList label={tagLabel} tags={entry.tags} />
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
          <strong>{level.label}</strong>
          <span className="language-dots" aria-label={`${level.label}: ${level.detail}`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <i
                className={index < Math.ceil(level.value / 20) ? 'filled' : ''}
                key={`${level.label}-${index}`}
                aria-hidden="true"
              />
            ))}
          </span>
          <span>{level.detail}</span>
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
        <p key={certification.title}>
          <time>{certification.date}</time>
          <strong>{certification.title}</strong>
          <em>{certification.issuer}</em>
        </p>
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
          <p>
            <FormattedText text={card.text} />
          </p>
        </section>
      ))}
    </div>
  );
}

function ProfileParagraphs({ paragraphs }) {
  if (!paragraphs?.length) {
    return null;
  }

  return (
    <div className="profile-paragraphs">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>
          {paragraph}
        </p>
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
  const tagLabel = language === 'ja' ? '技術:' : 'Technologies:';

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
        <ProfileParagraphs paragraphs={activeSection.paragraphs} />
        <LanguageLevels levels={activeSection.levels} />
        <CertificationList certifications={activeSection.certifications} />
        <ProfileCards cards={activeSection.cards} />
        {activeSection.entries?.length ? (
            <div className="cv-list">
              {activeSection.entries.map((entry) => (
                <CvEntry entry={entry} key={entry.title} tagLabel={tagLabel} />
              ))}
            </div>
        ) : null}
      </article>
    </section>
  );
}
