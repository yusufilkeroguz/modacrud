import React from 'react'

import { connect } from 'react-redux'

import { changeSelectedOrder } from './../actions/selectedOrder'
import { showDeleteModal } from './../actions/deleteModal'
import { showUpdateModal } from './../actions/updateModal'

import edit from '../../icons/pencil.svg'
import del from '../../icons/delete.svg'

const ListItem = function (props) {
  const { order, changeSelectedOrder, showDeleteModal, showUpdateModal } = props

  return (
    <div className={'list__item'}>
      <div className="list__item__name">{ order.name }</div>
      <div className="list__item__price">{ order.price }</div>
      <div className="list__item__address">{ order.address }</div>

      <div className="list__item__actions">
        <a href={'#'} className="list__item__actions--edit" dangerouslySetInnerHTML={{ __html: edit }} onClick={
          (event) => {
            event.preventDefault()
            changeSelectedOrder(order)
            showUpdateModal()
          }} />

        <a href={'#'} className="list__item__actions--delete" dangerouslySetInnerHTML={{ __html: del }} onClick={
          (event) => {
            event.preventDefault()
            changeSelectedOrder(order)
            showDeleteModal()
          }} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedOrder: state
  }
}

const mapDispatchToProps = dispatch => ({
  changeSelectedOrder: (payload) => dispatch(changeSelectedOrder(payload)),
  showDeleteModal: () => dispatch(showDeleteModal()),
  showUpdateModal: () => dispatch(showUpdateModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
