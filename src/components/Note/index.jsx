import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCurrentNote } from '../../actions/current'

class Note extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCurrentNote(this.props.match.params.filename)
  }

  render() {
    return (
      <div>
        <h4>Page with note id = {this.props.match.params.filename}</h4>
        <br />
        <Link to="/home">Back to home</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ current: state.current })
const mapDispatchToProps = (dispatch) => ({
  getCurrentNote: (filename) => dispatch(getCurrentNote(filename))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
