/*eslint-disable no-unused-vars*/
import React from 'react'
import AppBar from 'material-ui/AppBar'
import MonsterListContainer from '../containers/MonsterListContainer'
import ItemListContainer from '../containers/ItemListContainer'
import HitPointBarContainer from '../containers/HitPointBarContainer'
/*eslint-enable no-unused-vars*/

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}

const App = () => (
  <div>
    <AppBar
      title="Dungeon of Mandom Simulator"
      showMenuIconButton={ false }
    />
    <p>Hit Point</p>
    <HitPointBarContainer />
    <div style={styles.root}>
      <MonsterListContainer />
      <ItemListContainer />
    </div>
  </div>
)

export default App