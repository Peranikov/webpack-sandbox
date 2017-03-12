import { Record } from "immutable"

const ItemRecord = Record({
  id: null,
  name: "",
  equipment: true,
  defense: 0
})

export default class Item extends ItemRecord {
  getName() {
    return this.getName("name")
  }
}