/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import Monster from './Monster'
import CSS from '../styles/app.css'
/*eslint-enable no-unused-vars*/

const MonsterList = ({ monsters, onMonsterClick }) => (
  <ul className={CSS.monsterList}>
    {
      monsters.map(monster =>
        <Monster
          key={monster.id}
          monster={monster}
          onClick={() => onMonsterClick(monster.id)}
        />
      )
    }
  </ul>
)

MonsterList.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onMonsterClick: PropTypes.func.isRequired
}

export default MonsterList