import { connect } from 'react-redux'
import { toggleEquipment } from '../actions'
import ItemList from '../components/ItemList'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  onEquipmentClick: toggleEquipment
}

const ItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default ItemListContainer