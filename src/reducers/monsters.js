import { TOGGLE_JOIN_MONSTER } from '../actions/actionTypes'
import Monster from "../models/Monster"

const initialState = [
  new Monster({ id: 1, name: "ゴブリン", atack: 1}),
  new Monster({ id: 2, name: "ゴブリン", atack: 1}),
  new Monster({ id: 3, name: "スケルトン", atack: 2, type: "undead"}),
  new Monster({ id: 4, name: "スケルトン", atack: 2, type: "undead"}),
  new Monster({ id: 5, name: "オーク", atack: 3}),
  new Monster({ id: 6, name: "オーク", atack: 3}),
  new Monster({ id: 7, name: "バンパイア", atack: 4, type: "undead"}),
  new Monster({ id: 8, name: "バンパイア", atack: 4, type: "undead"}),
  new Monster({ id: 9, name: "ゴーレム", atack: 5}),
  new Monster({ id: 10, name: "ゴーレム", atack: 5}),
  new Monster({ id: 11, name: "リッチ", atack: 5, type: "undead"}),
  new Monster({ id: 12, name: "デーモン", atack: 7}),
  new Monster({ id: 13, name: "ドラゴン", atack: 9, type: "dragon"}),
]

const monster = (monster, action) => {
  switch (action.type) {
  case TOGGLE_JOIN_MONSTER:
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
  case TOGGLE_JOIN_MONSTER:
    return state.map(t =>
        monster(t, action)
      )
  default:
    return state
  }
}

export default monsters