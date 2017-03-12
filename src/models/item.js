import { Record } from "immutable"

const ItemRecord = Record({
  id: null,
  name: "",
  equipment: true,
  defense: 0,
  antiMonsterCondition: () => false,
  description: ""
})

export default class Item extends ItemRecord {
  setAntiMonsterCondition(fn) {
    return new Item({
      ...this.toObject(),
      antiMonsterCondition: fn
    })
  }

  toggleEquipment() {
    return new Item({
      ...this.toObject(),
      equipment: !this.equipment
    })
  }
}