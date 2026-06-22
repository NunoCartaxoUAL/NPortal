import React from 'react';
import DiagramCard from '../components/DiagramCard.jsx';
import { content } from '../data/content.js';

export default function EvidenceView({ language }) {
  const evidence = content[language].evidence;

  return (
    <section className="page-section" aria-labelledby="evidence-title">
      <header className="top-panel">
        <h1 id="evidence-title">{evidence.title}</h1>
      </header>

      <article className="paper visual-paper">
        <header className="evidence-intro">
          <h2>{evidence.heading}</h2>
          <p>{evidence.summary}</p>
        </header>

        <div className="visual-grid">
          {evidence.visuals.map((visual) => (
            <DiagramCard key={visual.title} visual={visual} />
          ))}
        </div>
      </article>
    </section>
  );
}
