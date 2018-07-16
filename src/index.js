import 'babel-polyfill'
import './styles/_index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Wrapper from './components/wrapper'
import { store } from './utils/store'

ReactDOM.render(
  <Provider store={store}>
    <Wrapper />
  </Provider>,
  document.getElementById('root')
)
