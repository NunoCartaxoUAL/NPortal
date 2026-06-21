import React, { useEffect, useState } from 'react';
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

function ProjectCaseStudy({ project }) {
  return (
    <div className="project-case">
      <header className="project-intro">
        <p className="project-tagline">{project.tagline}</p>
        <p>{project.summary}</p>
      </header>

      <div className="project-facts" aria-label={`${project.title} facts`}>
        {project.facts.map((fact) => (
          <div key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </div>

      <section className="project-block">
        <h3>What It Shows</h3>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="project-block">
        <h3>Product Flow</h3>
        <div className="project-flow">
          {project.flow.map((step, index) => (
            <React.Fragment key={step}>
              <span>{step}</span>
              {index < project.flow.length - 1 ? <i aria-hidden="true" /> : null}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="project-block">
        <h3>Stack</h3>
        <TagList tags={project.stack} />
      </section>

      <section className="project-block project-limits">
        <h3>Current Limits</h3>
        <ul>
          {project.limits.map((limit) => (
            <li key={limit}>{limit}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

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
        {selectedProject.summary ? (
          <ProjectCaseStudy project={selectedProject} />
        ) : (
          selectedProject.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        )}
      </article>
    </section>
  );
}
