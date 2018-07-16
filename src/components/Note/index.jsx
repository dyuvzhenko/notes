import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Note extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h4>Page with note id = {this.props.match.params.id}</h4>
        <br />
        <Link to="/home">Back to home</Link>
      </div>
    )
  }
}

export default Note
