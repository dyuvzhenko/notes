import React, { Component } from 'react'

import Header from './Header'
import Routes from './routes'

class Wrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Routes />
      </div>
    )
  }
}

export default Wrapper
