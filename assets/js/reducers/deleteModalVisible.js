export default (state = false, action) => {
  switch (action.type) {
    case 'DELETE_MODAL_VISIBLE':
      return action.payload
    case 'DELETE_MODAL_INVISIBLE':
      return action.payload
    default:
      return state
  }
}
