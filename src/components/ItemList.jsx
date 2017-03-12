/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import Item from './Item'
import {List} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import VorpalSwordContainer from '../containers/VorpalSwordContainer'
import CSS from '../styles/app.css'
/*eslint-enable no-unused-vars*/

const ItemList = ({ items, onEquipmentClick }) => (
  <div>
    <List>
      <Subheader>Items</Subheader>
      {
        items.map(item =>
          <Item
            key={item.id}
            item={item}
            onClick={() => onEquipmentClick(item.id)}
          />
        )
      }
    </List>
    <p>Vopal Sword Target</p>
    <VorpalSwordContainer />
  </div>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEquipmentClick: PropTypes.func.isRequired
}

export default ItemList