import { Record } from "immutable"

const MonsterRecord = Record({
  id: null,
  name: "",
  atack: 0,
  joined: true
})

export default class Monster extends MonsterRecord {
  getName() {
    return this.getName("name")
  }

  toggleJoined() {
    return new Monster({
      id: this.id,
      name: this.name,
      atack: this.atack,
      joined: !this.joined
    })
  }
}