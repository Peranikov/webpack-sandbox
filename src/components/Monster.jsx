/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
/*eslint-enable no-unused-vars*/

const Monster = ({ onClick, monster }) => {
  return (
    <li
      onClick={onClick}
      style={{
        opacity: monster.joined ? 1.0 : 0.3
      }}
    >
      {monster.name}
    </li>
  )
}

export default Monster