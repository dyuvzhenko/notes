import { routerMiddleware, connectRouter } from 'connected-react-router'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import reducer from '../reducers'
import { history } from './history'

const middleware = [
  routerMiddleware(history),
  thunkMiddleware,
  logger
]

const store = createStore(
  connectRouter(history)(reducer),
  compose(
    applyMiddleware(
      ...middleware
    )
  )
)

export { store }
