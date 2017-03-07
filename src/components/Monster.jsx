/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import CSS from '../styles/app.css'
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
    <span style={{ "marginLeft": "10px", opacity: monster.joined ? 1.0 : 0.3 }}>
      <span>{monster.atack}</span>
      <span style={{ "marginLeft": "10px" }}>{monster.name}</span>
    </span>
  </li>
)

export default Monster