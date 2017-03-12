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

  toggleEquipment() {
    return new Item({
      id: this.id,
      name: this.name,
      defense: this.defense,
      equipment: !this.equipment
    })
  }
}