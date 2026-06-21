import React, { useEffect, useState } from 'react';
import SectionTabs from '../components/SectionTabs.jsx';
import { content } from '../data/content.js';

export default function ProjectsView({ language }) {
  const projects = content[language].projects;
  const projectTabs = projects.sections.map((project) => project.title);
  const [activeProject, setActiveProject] = useState(projectTabs[0]);
  const selectedProject =
    projects.sections.find((project) => project.title === activeProject) ?? projects.sections[0];

  useEffect(() => {
    if (!projectTabs.includes(activeProject)) {
      setActiveProject(projectTabs[0]);
    }
  }, [activeProject, projectTabs]);

  return (
    <section className="page-section" aria-labelledby="projects-title">
      <header className="top-panel">
        <h1 id="projects-title">{projects.title}</h1>
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
        {selectedProject.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}
