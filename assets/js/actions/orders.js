export const addOrder = ({ id, name, price, address }) => ({
  type: 'ADD_ORDER',
  payload: {
    id,
    name,
    price,
    address
  }
})

export const deleteOrder = id => ({
  id,
  type: 'DELETE_ORDER',
  payload: function ({ state }) {
    state.map((order, key) => {
      if (id === order.id) {
        state.splice(key, 1);
      }
    })

    return state
  }
})

export const updateOrder = ({ id, name, price, address }) => ({
  type: 'CHANGE_ORDER',
  payload: function ({ state }) {
    state.map((order, key) => {
      if (order.id === id) {
        state[key] = { id, name, price, address }
      }
    })

    return state
  }
})
