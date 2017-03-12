import Monster from "../models/Monster"

const initialState = [
  new Monster({ id: 1, name: "ゴブリン", atack: 1}),
  new Monster({ id: 2, name: "オーク", atack: 3}),
  new Monster({ id: 3, name: "バンパイア", atack: 4, type: "undead"}),
  new Monster({ id: 13, name: "ドラゴン", atack: 9, type: "dragon"}),
]

const monster = (monster, action) => {
  switch (action.type) {
  case "TOGGLE_JOIN_MONSTER":
    if (monster.id !== action.id) {
      return monster
    }

    return monster.toggleJoined()
    
  default:
    return monster
  }
}

const monsters = (state = initialState, action) => {
  switch (action.type) {
  case "TOGGLE_JOIN_MONSTER":
    return state.map(t =>
        monster(t, action)
      )
  default:
    return state
  }
}

export default monsters