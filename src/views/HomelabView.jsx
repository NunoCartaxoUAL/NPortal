import React from 'react';
import { homelabItems } from '../data/content.js';

export default function HomelabView() {
  return (
    <section className="page-section" aria-labelledby="homelab-title">
      <header className="top-panel">
        <h1 id="homelab-title">Homelab</h1>
      </header>

      <article className="paper">
        <h2>Machines</h2>
        {homelabItems.map((item, index) => (
          <p key={`${item}-${index}`}>{item}</p>
        ))}
      </article>
    </section>
  );
}
