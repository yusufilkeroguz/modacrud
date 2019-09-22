const addOrder = ({ state, payload }) => {
  return payload
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_ORDER':
      return addOrder({ state, payload: action.payload })
    case 'DELETE_SELECTED_ORDER':
      return action.payload({ state })
    default:
      return state
  }
}
