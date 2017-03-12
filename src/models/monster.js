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

  isTypeUndead() {
    return this.type === "undead"
  }

  toggleJoined() {
    return new Monster({
      ...this.toObject(),
      joined: !this.joined
    })
  }
}