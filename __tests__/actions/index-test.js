import * as actions from '../../src/actions/index'
import * as types from '../../src/actions/actionTypes'
import assert from 'power-assert'

describe('actions', () => {
  it('#toggleJoinMonster', () => {
    const id = 1
    const expectedAction = {
      type: types.TOGGLE_JOIN_MONSTER,
      id
    }

    assert.deepStrictEqual(actions.toggleJoinMonster(id), expectedAction)
  })

  it('#toggleEquipment', () => {
    const id = 1
    const expectedAction = {
      type: types.TOGGLE_EQUIPMENT,
      id
    }

    assert.deepStrictEqual(actions.toggleEquipment(id), expectedAction)
  })

  it('#changeVorpalSwordTarget', () => {
    const name = "(´・ω・｀)"
    const expectedAction = {
      type: types.CHANGE_VORPAL_SWORD_TARGET,
      monsterName: name
    }
    assert.deepStrictEqual(actions.changeVorpalSwordTarget(name), expectedAction)
  })
})