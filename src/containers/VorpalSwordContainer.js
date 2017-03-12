import { connect } from 'react-redux'
import { changeVorpalSwordTarget } from '../actions'
import VorpalSwordSelector from '../components/VorpalSwordSelector'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  onChange: changeVorpalSwordTarget
}

const VorpalSwordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VorpalSwordSelector)

export default VorpalSwordContainer