import React, { useEffect, useState } from 'react';
import { DiagramBody } from '../components/DiagramCard.jsx';
import SectionTabs from '../components/SectionTabs.jsx';
import { content } from '../data/content.js';

function ProjectCaseStudy({ project, onImageOpen }) {
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
          <ProjectMedia item={item} key={`${item.type}-${item.title}`} onImageOpen={onImageOpen} />
        ))}
      </aside>
    </div>
  );
}

function ProjectMedia({ item, onImageOpen }) {
  if (item.type === 'image') {
    return (
      <figure className="project-media-card">
        <button className="project-image-button" type="button" onClick={() => onImageOpen(item)}>
          <img src={item.src} alt={item.alt} />
        </button>
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

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      onClick={onClose}
    >
      <button className="lightbox-close" type="button" onClick={onClose} aria-label="Close image">
        x
      </button>
      <figure onClick={(event) => event.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
        <figcaption>{image.title}</figcaption>
      </figure>
    </div>
  );
}

export default function ProjectsView({ language }) {
  const projects = content[language].projects;
  const projectTabs = projects.sections.map((project) => project.title);
  const [activeProject, setActiveProject] = useState(projectTabs[0]);
  const [lightboxImage, setLightboxImage] = useState(null);
  const selectedProject =
    projects.sections.find((project) => project.title === activeProject) ?? projects.sections[0];

  useEffect(() => {
    if (!projectTabs.includes(activeProject)) {
      setActiveProject(projectTabs[0]);
    }
  }, [activeProject, projectTabs]);

  useEffect(() => {
    setLightboxImage(null);
  }, [activeProject, language]);

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
          <ProjectCaseStudy project={selectedProject} onImageOpen={setLightboxImage} />
        ) : (
          selectedProject.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        )}
      </article>
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
}
