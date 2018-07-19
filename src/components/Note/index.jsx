import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem, Button } from 'react-bootstrap'

import Header from './Header'
import ColumnsList from './ColumnsList'
import { getCurrentNote, resetStateCurrent, changeBackgroundColor, changeTitle } from '../../actions/current'

class Note extends Component {
  constructor(props) {
    super(props)
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
  }

  componentWillMount() {
    this.props.getCurrentNote(this.props.match.params.filename)
  }

  componentWillUnmount() {
    this.props.resetStateCurrent()
  }

  changeBackgroundColor(colorObj) {
    this.props.changeBackgroundColor(colorObj)
  }

  changeTitle(title) {
    this.props.changeTitle(title)
  }

  render() {
    const { pending, data } = this.props.current
    return pending ? null : (
      <div className="note" style={{ backgroundColor: data.data.settings.colorObj.color }}>
        <Header
          changeTitle={this.changeTitle}
          changeBackgroundColor={this.changeBackgroundColor}
          currentBackgroundColor={data.data.settings.colorObj.color}
          currentFilename={this.props.match.params.filename}
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
  changeTitle: (title) => dispatch(changeTitle(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
