export default (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_MODAL_VISIBLE':
      return action.payload
    case 'UPDATE_MODAL_INVISIBLE':
      return action.payload
    default:
      return state
  }
}
