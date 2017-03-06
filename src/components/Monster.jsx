/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
/*eslint-enable no-unused-vars*/

const Monster = ({ onClick, monster }) => (
  <li>
    <span>
      {(() => {
        if (monster.joined) {
          return <i className="fa fa-minus" aria-hidden="true" style={{cursor: "pointer"}} onClick={onClick}></i>
        } else {
          return <i className="fa fa-plus" aria-hidden="true" style={{cursor: "pointer"}} onClick={onClick}></i>
        }
      })()}
    </span>
    <span style={{ opacity: monster.joined ? 1.0 : 0.3 }}>
      {monster.name}
    </span>
  </li>
)

export default Monster