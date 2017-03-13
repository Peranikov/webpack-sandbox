export const toggleJoinMonster = (id) => ({
  type: 'TOGGLE_JOIN_MONSTER',
  id
})

export const toggleEquipment = (id) => ({
  type: 'TOGGLE_EQUIPMENT',
  id
})

export const changeVorpalSwordTarget = (name) => ({
  type: 'CHANGE_VORPAL_SWORD_TARGET',
  monsterName: name
})