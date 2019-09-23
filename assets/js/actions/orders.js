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
    return state.splice(id, 1)
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

    console.log(state)

    return state
  }
})
