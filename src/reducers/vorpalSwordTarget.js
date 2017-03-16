import { CHANGE_VORPAL_SWORD_TARGET } from '../actions/actionTypes'

const vorpalSwordTarget = (state = "", action) => {
  switch (action.type) {
  case CHANGE_VORPAL_SWORD_TARGET:
    return state = action.monsterName
  default:
    return state
  }
}

export default vorpalSwordTarget