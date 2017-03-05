const initialState = [
  // TODO: classed
  { id: 1, name: "ゴブリン", joined: true},
  { id: 2, name: "オーク", joined: true},
  { id: 3, name: "ドラゴン", joined: true},
]

const monster = (state, action) => {
  switch (action.type) {
  case "TOGGLE_MONSTER":
    if (state.id !== action.id) {
      return state
    }

    return {
      id: state.id,
      name: state.name,
      joined: !state.joined
    }
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