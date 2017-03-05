// @flow

import "babel-polyfill"

/*eslint-disable no-unused-vars*/
import React from 'react'
import ReactDOM from 'react-dom'
import {Hello} from './Hello'
/*eslint-enable no-unused-vars*/

ReactDOM.render(<Hello content="hello react!!"/>, document.getElementById('app'))