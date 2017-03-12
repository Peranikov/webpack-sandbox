import Item from "../models/Item"

const initialState = [
  new Item({ id: 1, name: "ナイトシールド", equipment: true, defense: 3 }),
  new Item({ id: 2, name: "プレートメイル", equipment: true, defense: 5 })
]

const item = (item, action) => {
  switch (action.type) {
  case "TOGGLE_EQUIPMENT":
    if (item.id !== action.id) {
      return item
    }

    return item.toggleEquipment()
    
  default:
    return item
  }
}

const items = (state = initialState, action) => {
  switch (action.type) {
  case "TOGGLE_EQUIPMENT":
    return state.map(i => item(i, action))
  default:
    return state
  }
}

export default items