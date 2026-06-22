import React, { useEffect, useState } from 'react';
import { DiagramBody } from '../components/DiagramCard.jsx';
import SectionTabs from '../components/SectionTabs.jsx';
import { content } from '../data/content.js';

function FormattedText({ text }) {
  return text.split('**').map((part, index) => (
    index % 2 === 1 ? <strong key={`${part}-${index}`}>{part}</strong> : part
  ));
}

function ProjectCaseStudy({ language, project, onImageOpen }) {
  const body = project.body ?? project.highlights ?? [project.description].filter(Boolean);
  const media = project.media ?? [];
  const labels = {
    status: language === 'ja' ? '状態' : 'Status',
    platforms: language === 'ja' ? '対象' : 'Platforms',
    stack: language === 'ja' ? 'スタック' : 'Stack',
    flow: language === 'ja' ? '流れ' : 'Flow',
    strengths: language === 'ja' ? '現在の強み' : 'Current strengths',
    limits: language === 'ja' ? '現在の制限' : 'Current limits'
  };

  return (
    <div className="project-layout">
      <div className="project-case">
        <header className="project-summary">
          <p>
            <FormattedText text={project.objective} />
          </p>
        </header>

        <section className="project-brief" aria-label={`${project.title} overview`}>
          <div className="project-facts">
            <div>
              <span>{labels.status}</span>
              <strong>{project.status}</strong>
            </div>
            <div>
              <span>{labels.platforms}</span>
              <strong>{project.platforms}</strong>
            </div>
          </div>

          <div className="project-narrative">
            {body.map((paragraph) => (
              <p key={paragraph}>
                <FormattedText text={paragraph} />
              </p>
            ))}
          </div>

          <section className="project-stack" aria-label={`${project.title} stack`}>
            <h3>{labels.stack}</h3>
            <ol>
              {project.stackCards.map((card) => (
                <li key={card.title}>
                  <strong>{card.title}</strong>
                  <span>{card.text}</span>
                </li>
              ))}
            </ol>
          </section>

          {project.flow?.length ? (
            <section className="project-flow-section" aria-label={`${project.title} flow`}>
              <h3>{labels.flow}</h3>
              <div className="project-flow">
                {project.flow.map((step, index) => (
                  <React.Fragment key={step}>
                    <span>{step}</span>
                    {index < project.flow.length - 1 ? <i aria-hidden="true" /> : null}
                  </React.Fragment>
                ))}
              </div>
            </section>
          ) : null}

          <div className="project-status-grid">
            <section>
              <h3>{labels.strengths}</h3>
              <ul>
                {project.strengths.map((strength) => (
                  <li key={strength}>
                    <FormattedText text={strength} />
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3>{labels.limits}</h3>
              <ul>
                {project.limits.map((limit) => (
                  <li key={limit}>
                    <FormattedText text={limit} />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </div>

      {media.length ? (
        <aside className="project-media-rail" aria-label={`${project.title} visuals`}>
          {media.map((item) => (
            <ProjectMedia item={item} key={`${item.type}-${item.title}`} onImageOpen={onImageOpen} />
          ))}
        </aside>
      ) : null}
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
          <ProjectCaseStudy
            language={language}
            project={selectedProject}
            onImageOpen={setLightboxImage}
          />
        ) : (
          selectedProject.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        )}
      </article>
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
}
