import reducer from '../../src/reducers/items'
import Item from '../../src/models/item'
import assert from 'power-assert'

describe('items reducer', () => {

  describe('#TOGGLE_EQUIPMENT', () => {
    it('toggle equipment to true', () => {
      const state = [ new Item({ id: 1, equipment: false }) ]
      const ret = reducer(state, { type: "TOGGLE_EQUIPMENT", id: 1 })
      assert(ret[0].equipment === true)
    })

    it('toggle equipment to false', () => {
      const state = [ new Item({ id: 1, equipment: true }) ]
      const ret = reducer(state, { type: "TOGGLE_EQUIPMENT", id: 1 })
      assert(ret[0].equipment === false)
    })
  })

  describe('#CHANGE_VORPAL_SWORD_TARGET', () => {
    it('change vorpal sword target', () => {
      const state = [ new Item({ id: 1, name: "ヴォーパルソード", setAntiMonsterCondition: null }) ]
      const ret = reducer(state, { type: "CHANGE_VORPAL_SWORD_TARGET", monsterName: "ゴーレム" })
      assert.deepEqual(typeof ret[0].setAntiMonsterCondition, "function")
    })
  })
})