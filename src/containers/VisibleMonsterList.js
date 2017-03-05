import { connect } from 'react-redux'
import { toggleMonster } from '../actions'
import MonsterList from '../components/MonsterList'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  onMonsterClick: toggleMonster
}

const VisibleMonsterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonsterList)

export default VisibleMonsterList