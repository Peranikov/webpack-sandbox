import { connect } from 'react-redux'
import HitPointBar from '../components/HitPointBar'

function calcSumAtack(monsters, items) {
  const hasAntiItem = (monster) => {
    return items
      .filter((i) => (i.equipment))
      .find((item) => {
        return item.antiMonsterCondition(monster)
      })
  }

  return monsters
    .filter((m) => (m.joined))
    .filter((m) => (!hasAntiItem(m)))
    .map((m) => (m.atack))
    .reduce((sum, a) => (sum + a), 0)
}

function calcSumDefense(items) {
  const yourDefaultHitPoint = 3

  return items
    .filter((i) => (i.equipment))
    .map((i) => (i.defense))
    .reduce((sum, i) => (sum + i), yourDefaultHitPoint)
}

const mapStateToProps = (state) => {
  return {
    hitPoint: calcSumDefense(state.items),
    sumAtack: calcSumAtack(state.monsters, state.items)
  }
}

const HitPointBarContainer = connect(
  mapStateToProps
)(HitPointBar)

export default HitPointBarContainer