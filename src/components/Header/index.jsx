import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const defaultColor = '#026aa7'

class Header extends Component {
  render() {
    const { pathname } = this.props.router.location
    const { data } = this.props.current
    let backgroundColor = null
    try {
      backgroundColor = data.data.settings.colorObj.color
    } catch (e) {}

    return (
      <div className="header" style={{backgroundColor: backgroundColor ? backgroundColor : defaultColor}}>
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

const mapStateToProps = (state) => ({
  current: state.current,
  router: state.router
})

export default connect(mapStateToProps)(Header)
