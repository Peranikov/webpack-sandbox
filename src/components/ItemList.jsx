/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import Item from './Item'
import CSS from '../styles/app.css'
/*eslint-enable no-unused-vars*/

const ItemList = ({ items, onEquipmentClick }) => (
  <ul className={CSS.itemList}>
    {
      items.map(item =>
        <Item
          key={item.id}
          item={item}
          onClick={() => onEquipmentClick(item.id)}
        />
      )
    }
  </ul>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEquipmentClick: PropTypes.func.isRequired
}

export default ItemList