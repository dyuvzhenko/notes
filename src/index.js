import 'babel-polyfill'
import './styles/_index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Routes from './components/routes'
import { getNotesList } from './actions/notes'
import { store } from './utils/store'

store.dispatch(getNotesList())

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
