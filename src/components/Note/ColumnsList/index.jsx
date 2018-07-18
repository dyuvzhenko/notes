import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap'

import Column from './Column'

class ColumnsList extends Component {
  constructor(props) {
    super(props)
    // this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
    // this.state = {} // должен сыграть большую роль
  }

  render() {
    console.log(this.props)
    const { columns } = this.props
    return (
      <div className="note-columns-list">
        {columns.map((column, i) =>
          <Column key={i} column={column} />
        )}
      </div>
    )
  }
}

export default ColumnsList
