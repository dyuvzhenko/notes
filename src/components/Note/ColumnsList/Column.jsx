import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class Column extends Component {
  constructor(props) { // {true && <Card />} - здесь мы будем показывать компонент Card, если user его решится открыть... Или нет?
    super(props)
    // this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
    // this.state = {} // должен сыграть большую роль
  }

  render() {
    const { column } = this.props
    return (
      <div className="note-columns-list">
        <h4>{column.title}</h4>
      </div>
    )
  }
}

export default Column
