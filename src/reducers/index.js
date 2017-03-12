import { combineReducers } from 'redux'
import monsters from './monsters'
import items from './items'

const app = combineReducers({
  items,
  monsters
})

export default app