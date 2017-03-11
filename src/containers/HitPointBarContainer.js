import { connect } from 'react-redux'
import HitPointBar from '../components/HitPointBar'

function calcSumAtack(monsters) {
  return monsters
    .filter((m) => (m.joined))
    .map((m) => (m.atack))
    .reduce((sum, a) => (sum + a ), 0)
}

const mapStateToProps = (state) => {
  return {
    hitPoint: 13,
    sumAtack: calcSumAtack(state.monsters)
  }
}

const HitPointBarContainer = connect(
  mapStateToProps
)(HitPointBar)

export default HitPointBarContainer