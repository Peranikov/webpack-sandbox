/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import CSS from '../styles/app.css'
/*eslint-enable no-unused-vars*/

const Item = ({ onClick, item }) => (
  <li>
    <span>
      {(() => {
        if (item.equipment) {
          return <i className="fa fa-minus" aria-hidden="true" style={{cursor: "pointer"}} onClick={onClick}></i>
        } else {
          return <i className="fa fa-plus" aria-hidden="true" style={{cursor: "pointer"}} onClick={onClick}></i>
        }
      })()}
    </span>
    <span style={{ "marginLeft": "10px", opacity: item.equipment ? 1.0 : 0.3 }}>
      <span>{item.defense}</span>
      <span style={{ "marginLeft": "10px" }}>{item.name}</span>
    </span>
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