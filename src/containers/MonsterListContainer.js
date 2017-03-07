import { connect } from 'react-redux'
import { toggleMonster } from '../actions'
import MonsterList from '../components/MonsterList'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  onMonsterClick: toggleMonster
}

const MonsterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonsterList)

export default MonsterListContainer