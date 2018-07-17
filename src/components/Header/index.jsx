import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // показывать кнопку, если не главная стр
    return (
      <div className="header">
        <div className="left-btn">
          {false && <h3>На главную страницу</h3>}
        </div>
        <div className="title">
          <h3>{'Notebook'}</h3>
        </div>
      </div>
    )
  }
}


export default Header
