import React from 'react';
import { content } from '../data/content.js';

export default function HomelabView({ language }) {
  const homelab = content[language].homelab;

  return (
    <section className="page-section" aria-labelledby="homelab-title">
      <header className="top-panel">
        <h1 id="homelab-title">{homelab.title}</h1>
      </header>

      <article className="paper">
        <h2>{homelab.heading}</h2>
        {homelab.items.map((item, index) => (
          <p key={`${item}-${index}`}>{item}</p>
        ))}
      </article>
    </section>
  );
}
