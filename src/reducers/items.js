import { TOGGLE_EQUIPMENT, CHANGE_VORPAL_SWORD_TARGET } from '../actions/actionTypes'
import Item from "../models/Item"

const initialState = [
  new Item({
    id: 1,
    name: "たいまつ",
    antiMonsterCondition: (monster) => (
      monster.atack <= 3
    ),
    description: "攻撃力が3以下のモンスターを無効化"
  }),
  new Item({
    id: 2,
    name: "聖杯",
    antiMonsterCondition: (monster) => (
      monster.isTypeUndead()
    ),
    description: "アンデッドのモンスターを無効化"
  }),
  new Item({
    id: 3,
    name: "ナイトシールド",
    defense: 3,
    description: "HP +3"
  }),
  new Item({
    id: 4,
    name: "プレートメイル",
    defense: 5,
    description: "HP +5"
  }),
  new Item({
    id: 5,
    name: "ドラゴンランス",
    antiMonsterCondition: (monster) => (
      monster.isTypeDragon()
    ),
    description: "ドラゴンを無効化"
  }),
  new Item({
    id: 6,
    name: "ヴォーパルソード",
    description: "指定した１種類のモンスターを無効化"
  })
]

const item = (item, action) => {
  switch (action.type) {
  case "TOGGLE_EQUIPMENT":
    if (item.id !== action.id) {
      return item
    }

    return item.toggleEquipment()
  case "CHANGE_VORPAL_SWORD_TARGET":
    if (item.name !== "ヴォーパルソード") {
      return item
    }

    return item.setAntiMonsterCondition((monster) => (
      monster.name === action.monsterName
    ))
  default:
    return item
  }
}

const items = (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_EQUIPMENT:
    return state.map(i => item(i, action))
  case CHANGE_VORPAL_SWORD_TARGET:
    return state.map(i => item(i, action))
  default:
    return state
  }
}

export default items