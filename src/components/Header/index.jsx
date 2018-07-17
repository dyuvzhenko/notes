import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { createTestNote } from '../utils/note/createTestNote'
// createTestNote() // remove to home page (not header!)

class Header extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }

  render() {
    const { pathname } = this.props.router.location
    return (
      <div className="header">
        <div className="left-btn">
          <Link to={`/home`} disabled={pathname === '/home'}>На главную страницу</Link>
        </div>
        <div className="title">
          <span>Notes</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ router: state.router })

export default connect(mapStateToProps)(Header)
