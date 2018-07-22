import React from 'react'

export default ({ title, labels, openCard, cardNum }) => (
  <div className="card-preview" onClick={() => openCard(true, cardNum)}>
    <div className="label-list">
      {labels.map((label, i) =>
        <div className="label" key={i} style={{backgroundColor: label.color}}></div>
      )}
    </div>
    <span className="title">{title}</span>
  </div>
)
