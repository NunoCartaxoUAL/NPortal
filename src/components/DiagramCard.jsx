import React from 'react';

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

function ClassDiagram({ classes, relations }) {
  return (
    <div className="diagram-block">
      <div className="class-grid">
        {classes.map((classItem) => (
          <section className="class-box" key={classItem.name}>
            <h3>{classItem.name}</h3>
            <ul>
              {classItem.fields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
            <ul>
              {classItem.methods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <RelationList relations={relations} />
    </div>
  );
}

function ErdDiagram({ entities, relations }) {
  return (
    <div className="diagram-block">
      <div className="entity-grid">
        {entities.map((entity) => (
          <section className="entity-box" key={entity.name}>
            <h3>{entity.name}</h3>
            {entity.fields.map((field) => (
              <span key={field}>{field}</span>
            ))}
          </section>
        ))}
      </div>
      <RelationList relations={relations} />
    </div>
  );
}

function Flowchart({ nodes, edges }) {
  return (
    <div className="formal-diagram">
      <div className="flowchart-grid">
        {nodes.map((node) => (
          <section className="flow-node" key={node.id}>
            <span>{node.id}</span>
            <strong>{node.label}</strong>
          </section>
        ))}
      </div>
      <RelationList relations={edges} />
    </div>
  );
}

function SequenceDiagram({ actors, messages }) {
  return (
    <div className="sequence-diagram">
      <div className="sequence-actors">
        {actors.map((actor) => (
          <strong key={actor}>{actor}</strong>
        ))}
      </div>
      <div className="sequence-lines">
        {messages.map((message) => (
          <span key={message}>{message}</span>
        ))}
      </div>
    </div>
  );
}

function ComponentMap({ groups }) {
  return (
    <div className="component-map">
      {groups.map((group) => (
        <section key={group.name}>
          <h3>{group.name}</h3>
          {group.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>
      ))}
    </div>
  );
}

function RelationList({ relations }) {
  return (
    <div className="relation-list">
      {relations.map((relation) => (
        <span key={relation}>{relation}</span>
      ))}
    </div>
  );
}

function PlantUmlBlock({ lines }) {
  return <pre className="plantuml-block">{lines.join('\n')}</pre>;
}

export function DiagramBody({ visual }) {
  return (
    {
      bars: <Bars rows={visual.rows} />,
      flow: <Flow steps={visual.steps} />,
      matrix: <Matrix columns={visual.columns} rows={visual.rows} />,
      classDiagram: <ClassDiagram classes={visual.classes} relations={visual.relations} />,
      erd: <ErdDiagram entities={visual.entities} relations={visual.relations} />,
      flowchart: <Flowchart nodes={visual.nodes} edges={visual.edges} />,
      sequence: <SequenceDiagram actors={visual.actors} messages={visual.messages} />,
      componentMap: <ComponentMap groups={visual.groups} />,
      plantuml: <PlantUmlBlock lines={visual.lines} />
    }[visual.type] ?? null
  );
}

export default function DiagramCard({ visual, className = '' }) {
  return (
    <section className={`visual-card ${className}`.trim()} aria-label={visual.title}>
      <h2>{visual.title}</h2>
      <DiagramBody visual={visual} />
    </section>
  );
}
