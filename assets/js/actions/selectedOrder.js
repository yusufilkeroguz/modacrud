export const changeSelectedOrder = ({ id, name, price, address }) => ({
  type: 'CHANGE_SELECTED_ORDER',
  payload: {
    id,
    name,
    price,
    address
  }
})

export const deleteSelectedOrder = id => ({
  id,
  type: 'DELETE_SELECTED_ORDER',
  payload: function ({ state }) {
    return state = {}
  }
})
