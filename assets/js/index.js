import React, { useState, useEffect }  from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
import SweetAlert from 'sweetalert-react'

import style from './../scss/index.scss'
import 'sweetalert/dist/sweetalert.css'

import edit from './../img/pencil.svg'
import del from './../img/delete.svg'

async function deleteOrder({ orderId }) {
  const url = `http://localhost:3004/orders/${orderId}`
  const method = 'DELETE'

  return axios({
    method,
    url
  })
}

function DeleteModal(props) {
  const closeModal = () => props.setter(!props.visibility)

  return (
    <SweetAlert
      show={props.visibility}
      title="Emin misin?"
      text="Sipariş silinecektir? Bunu yapmak istediğine emin misin?"
      onConfirm={ () => { deleteOrder({ orderId: props.orderId }); closeModal() } }
      onCancel={ () => closeModal() }
      onEscapeKey={ () => closeModal() }
    />
  )
}

function EditForm() {
  return (
    <form className={'form'}>
      div.form-
    </form>
  )
}

function EditModal(props) {
  const closeModal = () => props.setter(!props.visibility)

  return (
    <SweetAlert
      show={props.visibility}
      title="Emin misin?"
      text="Sipariş silinecektir? Bunu yapmak istediğine emin misin?"
      onConfirm={ () => { deleteOrder({ orderId: props.orderId }); closeModal() } }
      onCancel={ () => closeModal() }
      onEscapeKey={ () => closeModal() }
    />
  )
}

function onClickActionButtons({ event, itemId, orderIdHandler, modalCurrentVisibility, modalHandler }) {
  event.preventDefault()
  orderIdHandler(itemId)
  modalHandler(!modalCurrentVisibility)
}

function Homepage() {
  const [orders, setOrders] = useState([]);
  const [showDeleteModal, setDeleteModalVisibility] = useState(false);
  const [showEditModal, setEditModalVisibility] = useState(false);
  const [ currentOrderId, setCurrentOrderId ] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'http://localhost:3004/orders',
      );
      setOrders(result.data);
    }

    fetchData()
  }, []);

  return (
    <React.Fragment>
      <div className={'container'} style={style.container}>
        <div className={'list'}>
          {orders.map((item, key) => (
            <div key={key} className={'list__item'}>
              <div className="list__item__name">{item.name}</div>
              <div className="list__item__price">{item.price}</div>
              <div className="list__item__address">{item.address}</div>

              <div className="list__item__actions">
                <a href={'#'} className="list__item__actions--edit" data-id={key}
                   dangerouslySetInnerHTML={{__html: edit}} onClick={(event) => {
                  onClickActionButtons({
                    event,
                    itemId: item.id,
                    orderIdHandler: setCurrentOrderId,
                    modalCurrentVisibility: showEditModal,
                    modalHandler: setEditModalVisibility
                  })
                }}/>
                <a href={'#'} className="list__item__actions--delete" data-id={key}
                   dangerouslySetInnerHTML={{__html: del}} onClick={(event) => {
                  onClickActionButtons({
                    event,
                    itemId: item.id,
                    orderIdHandler: setCurrentOrderId,
                    modalCurrentVisibility: showDeleteModal,
                    modalHandler: setDeleteModalVisibility
                  })
                }}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DeleteModal setter={setDeleteModalVisibility} visibility={showDeleteModal} orderId={currentOrderId} />
    </React.Fragment>
  )
}

ReactDOM.render(
<Homepage />,
  document.getElementById('root')
);
