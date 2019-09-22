const addOrder = ({ state, payload }) => {
  return [
    ...state,
    payload
  ]
}

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return addOrder({ state, payload: action.payload })
    case 'DELETE_ORDER':
      return action.payload({ state })
    case 'CHANGE_ORDER':
      return action.payload({ state })
    default:
      return state
  }
}
