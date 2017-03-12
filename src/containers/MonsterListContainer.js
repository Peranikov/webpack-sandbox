import { connect } from 'react-redux'
import { toggleJoinMonster } from '../actions'
import MonsterList from '../components/MonsterList'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  onMonsterClick: toggleJoinMonster
}

const MonsterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonsterList)

export default MonsterListContainer