/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import CSS from '../styles/app.css'
/*eslint-enable no-unused-vars*/

const Monster = ({ onClick, monster }) => {
  return (
    <li>
      <span>
        <Checkbox checked={monster.joined} onClick={onClick} label={monster.name + " : " + monster.atack} />
      </span>
    </li>
  )
}

export default Monster