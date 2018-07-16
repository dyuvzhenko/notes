import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { history } from '../utils/history'

import Home from './Home'
import Note from './Note'

const path = {
  home: '/home',
  note: '/note/:id'
}

history.push({ pathname: path.home })

class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={path.home} component={Home} />
          <Route exact path={path.note} component={Note} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default Routes
