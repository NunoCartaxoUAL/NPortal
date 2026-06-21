import React, { useState } from 'react';
import SectionTabs from '../components/SectionTabs.jsx';
import { projectSections } from '../data/content.js';

export default function ProjectsView() {
  const projectTabs = projectSections.map((project) => project.title);
  const [activeProject, setActiveProject] = useState(projectTabs[0]);
  const selectedProject = projectSections.find((project) => project.title === activeProject);

  return (
    <section className="page-section" aria-labelledby="projects-title">
      <header className="top-panel">
        <h1 id="projects-title">Projects</h1>
        <SectionTabs
          activeTab={activeProject}
          ariaLabel="Project sections"
          items={projectTabs}
          onChange={setActiveProject}
        />
      </header>

      <article
        className="paper"
        id={`panel-${selectedProject.title}`}
        role="tabpanel"
        aria-labelledby={`tab-${selectedProject.title}`}
      >
        <h2>{selectedProject.title}</h2>
        <p>{selectedProject.copy}</p>
      </article>
    </section>
  );
}
