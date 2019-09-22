import React from 'react'
import {connect} from 'react-redux'
import { showUpdateModal } from '../actions/updateModal'

function handleEvent(event, props) {
  event.preventDefault();
  props.showUpdateModal()
}

function addOrder(props) {
  return (
    <a href="#" className={'add-order'} onClick={(event) => { handleEvent(event, props) }}>
      &#x2b;
    </a>
  )
}

const mapDispatchToProps = dispatch => ({
  showUpdateModal: () => dispatch(showUpdateModal())
})

export default connect(false, mapDispatchToProps)(addOrder)
