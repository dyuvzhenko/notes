import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem, Button } from 'react-bootstrap'

import Header from './Header'
import ColumnsList from './ColumnsList'
import { getCurrentNote, resetStateCurrent, changeBackgroundColor, changeTitle, removeNote } from '../../actions/current'

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
        <Header
          changeTitle={this.props.changeTitle}
          changeBackgroundColor={this.props.changeBackgroundColor}
          currentBackgroundColor={data.data.settings.colorObj.color}
          removeNote={this.props.removeNote}
          removeNoteErrorMsg={removeError}
          title={data.data.title}
        />
        <ColumnsList columns={data.data.columns} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ current: state.current })

const mapDispatchToProps = (dispatch) => ({
  resetStateCurrent: () => dispatch(resetStateCurrent()),
  getCurrentNote: (filename) => dispatch(getCurrentNote(filename)),
  changeBackgroundColor: (colorObj) => dispatch(changeBackgroundColor(colorObj)),
  changeTitle: (title) => dispatch(changeTitle(title)),
  removeNote: () => dispatch(removeNote())
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
