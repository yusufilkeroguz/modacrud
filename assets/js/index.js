import React  from 'react'
import ReactDOM from 'react-dom'

import fetch from 'isomorphic-unfetch'

import style from './../scss/index.scss'

function initialize() {
  console.log('hi')
}

function getOrders() {

}

function HelloMessage(props) {
  return (
    <div className={'container'} style={style.container}>
      Merhaba {props.name}
    </div>
  )
}

initialize()

ReactDOM.render(
<HelloMessage name="Ali" />,
  document.getElementById('root')
);
