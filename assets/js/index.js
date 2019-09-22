/**
 * Libraries
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

/**
 * STYLES
 */
import style from './../scss/index.scss'
import 'sweetalert/dist/sweetalert.css'

/**
 * Redux Store
 */
import configureStore from './store';

/**
 * Components
 */
import List from './components/List'
import AddOrder from './components/AddOrder'

/**
 * @name
 * @description Project Initializer
 * @returns {*}
 * @constructor
 */
function App() {
  return (
    <div className={'container'} style={style.container}>
      <List />
      <AddOrder />
    </div>
  )
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
