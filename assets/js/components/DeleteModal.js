/**
 * Libraries
 */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import SweetAlert from 'sweetalert-react'

/**
 * Redux Actions
 */
import { hideDeleteModal } from '../actions/deleteModal'
import { deleteSelectedOrder } from '../actions/selectedOrder'
import { deleteOrder } from '../actions/orders'

class DeleteModal extends Component {
  constructor(props) {
    super(props)

    this.closeModal = this.closeModal.bind(this)
    this.deleteOrderRequest = this.deleteOrderRequest.bind(this)
  }

  /**
   * @name deleteOrderRequest
   * @description Send Request For Delete Selected Order
   * @returns {AxiosPromise}
   */
  deleteOrderRequest() {
    const { selectedOrder } = this.props
    const url = `http://localhost:3004/orders/${selectedOrder.id}`
    const method = 'DELETE'

    this.props.deleteSelectedOrder()
    this.props.deleteOrder(selectedOrder.id)

    return axios({
      method,
      url
    })
  }

  /**
   * @name closeModal
   * @description close Modal
   * @param sendRequest
   * @return boolean
   */
  closeModal(sendRequest) {
    if(sendRequest) {
      this.deleteOrderRequest();
    }

    this.props.deleteSelectedOrder()
    this.props.hidden()

    return true;
  }

  render() {
    return (
      <SweetAlert
        show={this.props.deleteModalVisible}
        html
        title="Emin misin?"
        text="Sipariş silinecektir? Bunu yapmak istediğine emin misin?"
        onConfirm={ () => { this.closeModal(true) } }
        onCancel={ () => this.closeModal(false) }
        onEscapeKey={ () => this.closeModal(false) }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    deleteModalVisible: state.deleteModalVisible,
    selectedOrder: state.selectedOrder
  }
}

const mapDispatchToProps = dispatch => ({
  hidden: () => dispatch(hideDeleteModal()),
  deleteSelectedOrder: (payload) => dispatch(deleteSelectedOrder(payload)),
  deleteOrder: (payload) => dispatch(deleteOrder(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
