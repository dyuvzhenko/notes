import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap'

import CardPreview from '../Card/CardPreview'
// import CardView from '../Card/CardView'

class Column extends Component {
  constructor(props) { // {true && <Card />}
    super(props)
    this.changeColumnTitle = this.changeColumnTitle.bind(this)
    this.state = {
      columnTitle: props.column.title
    }
  }

  changeColumnTitle(e) {
    this.setState({ columnTitle: e.target.value })
  }

  render() {
    const { columnTitle } = this.state
    const { column } = this.props
    return (
      <div className="note-column">
        <div className="column-title">
          <input
            className={'column-title-input ' + (true ? '' : 'active')}
            onChange={this.changeColumnTitle}
            value={columnTitle}
          />
        </div>
        <div className="column-card-list">
          {column.cards.map((card, i) =>
            <CardPreview key={i} title={card.title} labels={card.labels} />
          )}
        </div>
      </div>
    )
  }
}

export default Column
