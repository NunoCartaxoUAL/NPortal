import React, { useEffect, useState } from 'react';
import { DiagramBody } from '../components/DiagramCard.jsx';
import SectionTabs from '../components/SectionTabs.jsx';
import { content } from '../data/content.js';

function ProjectCaseStudy({ project }) {
  return (
    <div className="project-layout">
      <div className="project-case">
        <header className="project-intro">
          <p className="project-objective">{project.title} - {project.objective}</p>
          <p>{project.description}</p>
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
          <h3>Highlights</h3>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <section className="project-block">
          <h3>Stack Evidence</h3>
          <div className="stack-card-grid">
            {project.stackCards.map((card) => (
              <section className="stack-card" key={card.title}>
                <strong>{card.title}</strong>
                <span>{card.text}</span>
              </section>
            ))}
          </div>
        </section>

        <section className="project-block">
          <h3>Product Flow</h3>
          <div className="product-flowchart">
            {project.flow.map((step, index) => (
              <React.Fragment key={step}>
                <span>{step}</span>
                {index < project.flow.length - 1 ? <i aria-hidden="true" /> : null}
              </React.Fragment>
            ))}
          </div>
        </section>

        <div className="project-status-grid">
          <section className="project-block">
            <h3>Current Strengths</h3>
            <ul>
              {project.strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
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
      </div>

      <aside className="project-media-rail" aria-label={`${project.title} visuals`}>
        {project.media.map((item) => (
          <ProjectMedia item={item} key={`${item.type}-${item.title}`} />
        ))}
      </aside>
    </div>
  );
}

function ProjectMedia({ item }) {
  if (item.type === 'image') {
    return (
      <figure className="project-media-card">
        <img src={item.src} alt={item.alt} />
        <figcaption>{item.title}</figcaption>
      </figure>
    );
  }

  return (
    <section className="project-media-card project-diagram-card" aria-label={item.title}>
      <h3>{item.title}</h3>
      <DiagramBody visual={item} />
    </section>
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
        {selectedProject.objective ? (
          <ProjectCaseStudy project={selectedProject} />
        ) : (
          selectedProject.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        )}
      </article>
    </section>
  );
}
