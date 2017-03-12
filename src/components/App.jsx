/*eslint-disable no-unused-vars*/
import React from 'react'
import AppBar from 'material-ui/AppBar'
import MonsterListContainer from '../containers/MonsterListContainer'
import ItemListContainer from '../containers/ItemListContainer'
import HitPointBarContainer from '../containers/HitPointBarContainer'
import VorpalSwordContainer from '../containers/VorpalSwordContainer'
/*eslint-enable no-unused-vars*/

const App = () => (
  <div>
    <AppBar
      title="Dungeon of Mandom Simulator"
      showMenuIconButton={ false }
    />
    <div>
      <p>Monsters</p>
      <MonsterListContainer />
    </div>
    <div>
      <p>Items</p>
      <ItemListContainer />
    </div>
    <div>
      <p>Vopal Sword Target</p>
      <VorpalSwordContainer />
    </div>
    <div>
      <p>Hit Point</p>
      <HitPointBarContainer />
    </div>
  </div>
)

export default App