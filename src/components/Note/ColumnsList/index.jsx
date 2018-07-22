import React from 'react'

import Column from './Column'

/* just comfort interlayer */
export default ({
  columns, labelsDescription, createColumn,
  changeColumnTitle, createCard, changeCard
}) => (
  <div className="note-columns-list">
    {columns.map((column, i) =>
      <Column
        key={i}
        columnNum={i}
        column={column}
        changeCard={changeCard}
        labelsDescription={labelsDescription}
        changeColumnTitle={changeColumnTitle}
        createCard={createCard}
      />
    )}
    <div className="add-new-column" onClick={createColumn}>
      <div className="add-new-column-wrap">
        <span> + Add new column</span>
      </div>
    </div>
  </div>
)
