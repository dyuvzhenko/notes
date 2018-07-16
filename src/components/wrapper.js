import React, { Component } from 'react'
import { connect } from 'react-redux'

import {testCheck} from '../actions/test'

import Header from './Header'
import Routes from './routes'

class Wrapper extends Component {
  constructor(props) {
    super(props)
    console.log('Heyo! (Wrapper Component)')
  }

  componentWillMount() {
    this.props.testCheck()
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

const mapStateToProps = (state) => ({ test: state.test })
const mapDispatchToProps = (dispatch) => ({
  testCheck: () => dispatch(testCheck())
})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
