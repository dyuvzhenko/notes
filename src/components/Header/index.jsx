import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { pathname } = this.props.router.location
    return (
      <div className="header">
        <div className="left-btn">
          {pathname !== '/home' &&
            <Link to={`/home`}>На главную страницу</Link>
          }
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
