import { combineReducers } from 'redux'
import monsters from './monsters'
import items from './items'
import vorpalSwordTarget from './vorpalSwordTarget'

const app = combineReducers({
  items,
  monsters,
  vorpalSwordTarget
})

export default app