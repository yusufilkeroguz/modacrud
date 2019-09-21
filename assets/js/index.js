import React, { useState, useEffect }  from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import style from './../scss/index.scss'

import edit from './../img/pencil.svg'
import del from './../img/delete.svg'

import Modal from './components/Modal'

async function getOrders() {
  const data = await fetch('http://localhost:3004')
  return data.json()
}

function editOrder({ orderKey }) {

}

function HelloMessage(props) {
  const [orders, setOrders] = useState([]);
  const [showModal, setModalVisibility] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'http://localhost:3004/orders',
      );
      setOrders(result.data);
    }

    fetchData()
  }, []);

  console.log('showModal')
  console.log(showModal)

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
                <a href={'#'} className="list__item__actions--edit" data-id={key} dangerouslySetInnerHTML={{ __html: edit }} onClick={(e) => { e.preventDefault(); setModalVisibility(!showModal) }} />
                <a href={'#'} className="list__item__actions--delete" data-id={key} dangerouslySetInnerHTML={{ __html: del }} onClick={(e) => { e.preventDefault(); setModalVisibility(!showModal) }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal title={'sa'} visibility={showModal} />
    </React.Fragment>
  )
}

ReactDOM.render(
<HelloMessage name="Ali" />,
  document.getElementById('root')
);
