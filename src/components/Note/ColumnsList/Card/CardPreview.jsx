import React from 'react'
// showCard
export default ({ title, labels }) => (
  <div className="card-preview" onClick={() => null}>
    <div className="label-list">
      {labels.map((label, i) =>
        <div className="label" key={i} style={{backgroundColor: label.color}}></div>
      )}
    </div>
    <span className="title">{title}</span>
  </div>
)
