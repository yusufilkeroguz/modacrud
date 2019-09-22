import React, { useEffect } from 'react'

import { connect } from 'react-redux';

import { addOrder, deleteOrder } from './../actions/orders'
import axios from 'axios'

import DeleteModal from './DeleteModal'
import UpdateModal from './UpdateModal'
import ListItem from './ListItem'

const List = function (props) {
  useEffect(() => {
    async function fetchOrder() {
      const response = await axios('http://localhost:3004/orders');
      const orders = await response.data||[]
      await orders.map((order) => {
        return props.addOrder({ id: order.id, name: order.name, price: order.price, address: order.address })
      })
      return response.data;
    }

    fetchOrder()
  }, [])

  const { orders } = props

  return (
    <div className={'list'}>
      {orders.map((order, key) => {
        return (
          <ListItem order={ order } key={ key } />
        )
      })}

      <DeleteModal visiblity={ false }/>
      <UpdateModal visiblity={ false }/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    orders: [
      ...state.orders
    ]
  }
}

const mapDispatchToProps = dispatch => ({
  addOrder: (payload) => dispatch(addOrder(payload)),
  deleteOrder: (payload) => dispatch(deleteOrder(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
