/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import {ListItem} from 'material-ui/List'
/*eslint-enable no-unused-vars*/

const Monster = ({ onClick, monster }) => {
  return (
    <ListItem
      leftCheckbox={<Checkbox checked={monster.joined} onClick={onClick} />}
      primaryText={monster.name}
      secondaryText={"atack: " + monster.atack}
    />
  )
}

export default Monster