/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import {ListItem} from 'material-ui/List'
import CSS from '../styles/app.css'
/*eslint-enable no-unused-vars*/

const Item = ({ onClick, item }) => (
  <ListItem
    leftCheckbox={<Checkbox checked={item.equipment} onClick={onClick} />}
    primaryText={item.name}
    secondaryText={"defense: " + item.defense}
  />
)

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Item