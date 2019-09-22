/**
 * Libraries
 */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import SweetAlert from 'sweetalert-react'
import { renderToStaticMarkup } from 'react-dom/server';
import qs from 'qs'

/**
 * Redux Actions
 */
import { deleteSelectedOrder } from '../actions/selectedOrder'
import { addOrder } from '../actions/orders'
import { hideUpdateModal } from '../actions/updateModal'

class UpdateModal extends Component {
  constructor(props) {
    super(props)

    this.closeModal = this.closeModal.bind(this)
    this.modalForm = this.modalForm.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
    this.formValidation = this.formValidation.bind(this)
    // this.updateOrderRequest = this.updateOrderRequest.bind(this)
  }

  /**
   * @name updateOrderRequest
   * @description Send Request For Delete Selected Order
   * @returns {AxiosPromise}
   */
  updateOrderRequest(data) {
    const { id } = this.props.selectedOrder
    const url = `http://localhost:3004/orders/${id ? `${id}` : ''}`
    const method = 'POST'
    const headers = { 'Content-Type': 'application/json', Accept: 'application/json'}

    return axios({
      method,
      url,
      headers,
      data,
      responseType:'json'
    })
  }

  /**
   * @name closeModal
   * @description close Modal
   * @param sendRequest
   * @param data
   * @return boolean
   */
  closeModal(sendRequest, data) {
    if(sendRequest && data) {
      this.updateOrderRequest(data)
    }

    this.props.hidden()

    return true;
  }

  formValidation() {
    const id = document.querySelector('#id').value
    const price = document.querySelector('#price').value
    const name = document.querySelector('#name').value
    const address = document.querySelector('#address').value

    return {
      id,
      price,
      name,
      address
    }
  }

  formSubmit({ event = null }) {
    if (event) {
      event.preventDefault()
    }

    const data = this.formValidation()
    this.props.addOrder(data)
    this.closeModal(true, data)
  }

  /**
   * @name modalForm
   * @returns {*}
   */
  modalForm() {
    const { name = '', price = '', address = '' } = this.props.selectedOrder

    return (
      <form action={'#'} method={'post'} className={'form'} onSubmit={ (event) => { this.formSubmit({ event }) }}>
        <div className='form__group'>
          <label htmlFor='name' className={'form__group__label'}>Müşteri Adı:</label>
          <input type='text' id={'name'} name={'name'} className={'form__group__input'} value={name} />
        </div>
        <div className='form__group'>
          <label htmlFor='price' className={'form__group__label'}>Ürünün Fiyatı:</label>
          <input type='text' id={'price'} name={'price'} className={'form__group__input'} value={price} />
        </div>
        <div className='form__group'>
          <label htmlFor='address' className={'form__group__label'}>Ürünün Fiyatı:</label>
          <textarea id='address' name='address' cols='30' rows='10' className={'form__group__input'} value={address} />
        </div>
      </form>
    )
  }

  render() {
    return (
      <SweetAlert
        show={this.props.updateModalVisible}
        html
        title={this.props.selectedOrder ? 'Ürün Güncelle' : 'Ürün Ekle'}
        text={ renderToStaticMarkup(this.modalForm()) }
        onConfirm={ () => { this.formSubmit({}) } }
        onCancel={ () => this.closeModal(false) }
        onEscapeKey={ () => this.closeModal(false) }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    updateModalVisible: state.updateModalVisible,
    selectedOrder: state.selectedOrder
  }
}

const mapDispatchToProps = dispatch => ({
  hidden: () => dispatch(hideUpdateModal()),
  deleteSelectedOrder: (payload) => dispatch(deleteSelectedOrder(payload)),
  addOrder: (payload) => dispatch(addOrder(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateModal);
