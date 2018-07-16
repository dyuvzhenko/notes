import 'babel-polyfill'
import './styles/_index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Wrapper from './components/wrapper'

import { getNotesList } from './actions/notes'
import { store } from './utils/store'

// import { createTestNote } from './utils/note/createTestNote'
// createTestNote() // remove to home page (not header!)

store.dispatch(getNotesList())  // первичный осмотр всех лежащих файлов в директории. Валидацию делаем на попытке открыть файл полностью.

ReactDOM.render(
  <Provider store={store}>
    <Wrapper />
  </Provider>,
  document.getElementById('root')
)
