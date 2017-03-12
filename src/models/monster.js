import { Record } from "immutable"

const MonsterRecord = Record({
  id: null,
  name: "",
  atack: 0,
  joined: true,
  type: ""
})

export default class Monster extends MonsterRecord {
  isTypeDragon() {
    return this.type === "dragon"
  }

  toggleJoined() {
    return new Monster({
      id: this.id,
      name: this.name,
      atack: this.atack,
      type: this.type,
      joined: !this.joined
    })
  }
}