/*eslint-disable no-unused-vars*/
import React from 'react'
import MonsterListContainer from '../containers/MonsterListContainer'
import HitPointBarContainer from '../containers/HitPointBarContainer'
/*eslint-enable no-unused-vars*/

const App = () => (
  <div>
    <h1>Dungeon of Mandom Simulator</h1>
    <div>
      <p>Monsters</p>
      <MonsterListContainer />
    </div>
    <div>
      <HitPointBarContainer />
    </div>
  </div>
)

export default App