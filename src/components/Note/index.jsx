import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem, Button } from 'react-bootstrap'

import NoteHeading from './NoteHeading'
import ColumnsList from './ColumnsList'

import {
  getCurrentNote, resetStateCurrent, changeBackgroundColor,
  changeTitle, removeNote, pushNewColumn, changeColumnTitle,
  saveLabelsDescription, createCard
} from '../../actions/current'

class Note extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getCurrentNote(this.props.match.params.filename)
  }

  componentWillUnmount() {
    this.props.resetStateCurrent()
  }

  render() {
    const { pending, data, removeError } = this.props.current
    return pending ? null : (
      <div className="note" style={{ backgroundColor: data.data.settings.colorObj.color }}>
        <NoteHeading
          changeTitle={this.props.changeTitle}
          changeBackgroundColor={this.props.changeBackgroundColor}
          currentBackgroundColor={data.data.settings.colorObj.color}
          currentLabelsSettings={data.data.settings.labelsDescription}
          saveLabelsDescription={this.props.saveLabelsDescription}
          removeNote={this.props.removeNote}
          removeNoteErrorMsg={removeError}
          title={data.data.title}
        />
        <ColumnsList
          columns={data.data.columns}
          createColumn={this.props.pushNewColumn}
          changeColumnTitle={this.props.changeColumnTitle}
          labelsDescription={data.data.settings.labelsDescription}
          createCard={this.props.createCard}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ current: state.current })

const mapDispatchToProps = (dispatch) => ({
  resetStateCurrent: () => dispatch(resetStateCurrent()),
  getCurrentNote: (filename) => dispatch(getCurrentNote(filename)),
  changeBackgroundColor: (colorObj) => dispatch(changeBackgroundColor(colorObj)),
  changeColumnTitle: (columnNum, newTitle) => dispatch(changeColumnTitle(columnNum, newTitle)),
  saveLabelsDescription: (labelsDescription, callback) => dispatch(saveLabelsDescription(labelsDescription, callback)),
  createCard: (columnNum) => dispatch(createCard(columnNum)),
  changeTitle: (title) => dispatch(changeTitle(title)),
  pushNewColumn: () => dispatch(pushNewColumn()),
  removeNote: () => dispatch(removeNote())
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
