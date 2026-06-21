import React from 'react';

export default function SectionTabs({ activeTab, ariaLabel, items, onChange }) {
  return (
    <div className="tabs" role="tablist" aria-label={ariaLabel}>
      {items.map((item) => (
        <button
          className={activeTab === item ? 'tab active' : 'tab'}
          id={`tab-${item}`}
          key={item}
          onClick={() => onChange(item)}
          role="tab"
          type="button"
          aria-controls={`panel-${item}`}
          aria-selected={activeTab === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
