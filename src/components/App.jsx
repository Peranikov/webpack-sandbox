/*eslint-disable no-unused-vars*/
import React from 'react'
import MonsterListContainer from '../containers/MonsterListContainer'
import HitPointBarContainer from '../containers/HitPointBarContainer'
/*eslint-enable no-unused-vars*/

const App = () => (
  <div>
    <div>
      <p>ダンジョン</p>
      <MonsterListContainer />
    </div>
    <div>
      <HitPointBarContainer />
    </div>
  </div>
)

export default App