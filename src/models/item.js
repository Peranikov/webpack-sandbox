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
      id: this.id,
      name: this.name,
      defense: this.defense,
      antiMonsterCondition: fn,
      equipment: this.equipment,
      description: this.description
    })
  }

  toggleEquipment() {
    return new Item({
      id: this.id,
      name: this.name,
      defense: this.defense,
      antiMonsterCondition: this.antiMonsterCondition,
      equipment: !this.equipment,
      description: this.description
    })
  }
}