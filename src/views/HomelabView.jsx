import React, { useEffect, useState } from 'react';
import SectionTabs from '../components/SectionTabs.jsx';
import { content } from '../data/content.js';

function NetworkPanel({ tab }) {
  return (
    <div className="homelab-network">
      <p>{tab.summary}</p>
      <div className="meshnet-diagram" aria-label="NordVPN Meshnet diagram">
        <strong>NordVPN private Meshnet</strong>
        <div>
          {tab.nodes.map((node) => (
            <span key={node}>{node}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MachinesPanel({ tab }) {
  return (
    <div className="machine-grid">
      {tab.machines.map((machine) => (
        <section className="machine-card" key={machine.name}>
          <h3>{machine.name}</h3>
          <p>{machine.os}</p>
          <ul>
            {machine.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function ServicesPanel({ tab }) {
  return (
    <div className="service-grid">
      {tab.services.map((service) => (
        <section className="service-card" key={service.name}>
          <span>{service.host}</span>
          <h3>{service.name}</h3>
          <p>{service.detail}</p>
        </section>
      ))}
    </div>
  );
}

export default function HomelabView({ language }) {
  const homelab = content[language].homelab;
  const tabTitles = homelab.tabs.map((tab) => tab.title);
  const [activeTab, setActiveTab] = useState(tabTitles[0]);
  const selectedTab = homelab.tabs.find((tab) => tab.title === activeTab) ?? homelab.tabs[0];

  useEffect(() => {
    if (!tabTitles.includes(activeTab)) {
      setActiveTab(tabTitles[0]);
    }
  }, [activeTab, tabTitles]);

  return (
    <section className="page-section" aria-labelledby="homelab-title">
      <header className="top-panel">
        <h1 id="homelab-title">{homelab.title}</h1>
        <SectionTabs
          activeTab={activeTab}
          ariaLabel="Homelab sections"
          items={tabTitles}
          onChange={setActiveTab}
        />
      </header>

      <article className="paper">
        <h2>{selectedTab.title}</h2>
        {selectedTab.id === 'network' ? <NetworkPanel tab={selectedTab} /> : null}
        {selectedTab.id === 'machines' ? <MachinesPanel tab={selectedTab} /> : null}
        {selectedTab.id === 'services' ? <ServicesPanel tab={selectedTab} /> : null}
      </article>
    </section>
  );
}
