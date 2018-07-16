import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h4>Start page</h4>
        <br />
        <Link to={`/note/3`}>link to note with id = 3</Link>
      </div>
    )
  }
}

export default Home
