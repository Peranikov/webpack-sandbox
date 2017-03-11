import Monster from "../models/Monster"

const initialState = [
  new Monster({ id: 1, name: "ゴブリン", atack: 1, joined: true}),
  new Monster({ id: 2, name: "オーク", atack: 3, joined: true}),
  new Monster({ id: 3, name: "ドラゴン", atack: 9, joined: true}),
]

const monster = (state, action) => {
  switch (action.type) {
  case "TOGGLE_MONSTER":
    if (state.id !== action.id) {
      return state
    }

    return new Monster({
      id: state.id,
      name: state.name,
      atack: state.atack,
      joined: !state.joined
    })
    
  default:
    return state
  }
}

const monsters = (state = initialState, action) => {
  switch (action.type) {
  case "TOGGLE_MONSTER":
    return state.map(t =>
        monster(t, action)
      )
  default:
    return state
  }
}

export default monsters