export const showDeleteModal = () => ({
  type: 'DELETE_MODAL_VISIBLE',
  payload: true
})

export const hideDeleteModal = () => ({
  type: 'DELETE_MODAL_INVISIBLE',
  payload: false
})
