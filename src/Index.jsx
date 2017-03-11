// @flow

import "babel-polyfill"

/*eslint-disable no-unused-vars*/
import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './components/App'
import reducer from './reducers'
import createLogger from 'redux-logger'

import font_awesome from 'font-awesome/css/font-awesome.css'
/*eslint-enable no-unused-vars*/

const logger = createLogger()
const store = createStore(
  reducer,
  applyMiddleware(logger)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)