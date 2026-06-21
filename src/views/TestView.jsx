import React from 'react';
import { content } from '../data/content.js';

function Bars({ rows }) {
  return (
    <div className="bar-list">
      {rows.map((row) => (
        <div className="bar-row" key={row.label}>
          <span>{row.label}</span>
          <div className="bar-track" aria-hidden="true">
            <span style={{ width: `${row.value}%` }} />
          </div>
          <strong>{row.value}</strong>
        </div>
      ))}
    </div>
  );
}

function Flow({ steps }) {
  return (
    <div className="flow-list">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <span>{step}</span>
          {index < steps.length - 1 ? <i aria-hidden="true" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function Tree({ root, branches }) {
  return (
    <div className="tree-graph">
      <strong>{root}</strong>
      <div>
        {branches.map((branch) => (
          <span key={branch}>{branch}</span>
        ))}
      </div>
    </div>
  );
}

function Matrix({ columns, rows }) {
  return (
    <div className="fit-matrix">
      <span />
      {columns.map((column) => (
        <strong key={column}>{column}</strong>
      ))}
      {rows.map((row) => (
        <React.Fragment key={row.label}>
          <b>{row.label}</b>
          {row.values.map((value, valueIndex) => (
            <span className="matrix-score" key={`${row.label}-${valueIndex}`}>
              {Array.from({ length: 3 }).map((_, dotIndex) => (
                <i
                  className={dotIndex < value ? 'filled' : ''}
                  key={`${row.label}-${valueIndex}-${dotIndex}`}
                  aria-hidden="true"
                />
              ))}
            </span>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline-list">
      {items.map((item, index) => (
        <span key={item}>
          <i aria-hidden="true">{index + 1}</i>
          {item}
        </span>
      ))}
    </div>
  );
}

function Chips({ items }) {
  return (
    <div className="chip-list">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function Ladder({ items }) {
  return (
    <div className="ladder-list">
      {items.map((item, index) => (
        <span style={{ marginLeft: `${index * 12}px` }} key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function Checklist({ items }) {
  return (
    <div className="check-list">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function VisualCard({ visual }) {
  const visualBody = {
    bars: <Bars rows={visual.rows} />,
    flow: <Flow steps={visual.steps} />,
    tree: <Tree root={visual.root} branches={visual.branches} />,
    matrix: <Matrix columns={visual.columns} rows={visual.rows} />,
    timeline: <Timeline items={visual.items} />,
    chips: <Chips items={visual.items} />,
    ladder: <Ladder items={visual.items} />,
    checklist: <Checklist items={visual.items} />
  }[visual.type];

  return (
    <section className="visual-card" aria-label={visual.title}>
      <h2>{visual.title}</h2>
      {visualBody}
    </section>
  );
}

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
            <VisualCard key={visual.title} visual={visual} />
          ))}
        </div>
      </article>
    </section>
  );
}
