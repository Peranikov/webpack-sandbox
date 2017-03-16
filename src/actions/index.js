import * as types from './actionTypes'

export const toggleJoinMonster = (id) => ({
  type: types.TOGGLE_JOIN_MONSTER,
  id
})

export const toggleEquipment = (id) => ({
  type: types.TOGGLE_EQUIPMENT,
  id
})

export const changeVorpalSwordTarget = (name) => ({
  type: types.CHANGE_VORPAL_SWORD_TARGET,
  monsterName: name
})