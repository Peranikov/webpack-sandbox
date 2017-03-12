/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import CSS from '../styles/app.css'
/*eslint-enable no-unused-vars*/

const Item = ({ onClick, item }) => (
  <li>
    <Checkbox checked={item.equipment} onClick={onClick} label={item.name} />
  </li>
)

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Item