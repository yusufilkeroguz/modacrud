import { combineReducers } from 'redux'

import orders from './orders'
import deleteModalVisible from './deleteModalVisible'
import updateModalVisible from './updateModalVisible'
import selectedOrder from './selectedOrder'

export default combineReducers({
  orders,
  selectedOrder,
  deleteModalVisible,
  updateModalVisible,
})
