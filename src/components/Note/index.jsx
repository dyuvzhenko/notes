import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem, Button } from 'react-bootstrap'

import Header from './Header'
import ColumnsList from './ColumnsList'
import { getCurrentNote, resetStateCurrent, changeBackgroundColor } from '../../actions/current'

class Note extends Component {
  constructor(props) {
    super(props)
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
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

  render() {
    const { pending, data } = this.props.current
    return pending ? null : (
      <div className="note" style={{ backgroundColor: data.data.settings.colorObj.color }}>
        <Header title={data.data.title} changeBackgroundColor={this.changeBackgroundColor} />
        <ColumnsList columns={data.data.columns} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ current: state.current })

const mapDispatchToProps = (dispatch) => ({
  resetStateCurrent: () => dispatch(resetStateCurrent()),
  getCurrentNote: (filename) => dispatch(getCurrentNote(filename)),
  changeBackgroundColor: (colorObj) => dispatch(changeBackgroundColor(colorObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
