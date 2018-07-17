import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { history } from '../utils/history'

import Header from './Header'
import Home from './Home'
import Note from './Note'

const path = {
  home: '/home',
  note: '/note/:filename'
}

history.push({ pathname: path.home })

class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path={path.home} component={Home} />
            <Route exact path={path.note} component={Note} />
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}

export default Routes
