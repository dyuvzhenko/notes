import React from 'react'

import Column from './Column'

/* just comfort interlayer */
export default ({ columns }) => (
  <div className="note-columns-list">
    {columns.map((column, i) =>
      <Column key={i} columnNum={i} column={column} />
    )}
  </div>
)
