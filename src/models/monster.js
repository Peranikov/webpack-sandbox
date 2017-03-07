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
}