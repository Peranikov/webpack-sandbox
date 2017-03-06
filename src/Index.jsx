// @flow

import "babel-polyfill"

/*eslint-disable no-unused-vars*/
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './components/App'
import reducer from './reducers'

import font_awesome from 'font-awesome/css/font-awesome.css'
/*eslint-enable no-unused-vars*/

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)