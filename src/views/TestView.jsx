import React from 'react';
import DiagramCard from '../components/DiagramCard.jsx';
import { content } from '../data/content.js';

export default function TestView({ language }) {
  const test = content[language].test;

  return (
    <section className="page-section" aria-labelledby="test-title">
      <header className="top-panel">
        <h1 id="test-title">{test.title}</h1>
      </header>

      <article className="paper visual-paper">
        <div className="visual-grid">
          {test.visuals.map((visual) => (
            <DiagramCard key={visual.title} visual={visual} />
          ))}
        </div>
      </article>
    </section>
  );
}
