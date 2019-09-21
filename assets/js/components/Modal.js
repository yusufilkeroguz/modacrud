import React, { useState } from 'react'

export default (props) => {
  const [visibility, setVisibility] = useState({ value: props.visibility })

  return (
    <div className={`modal${ !!visibility.value ? ' --show' : ' --hide' }`}>
      <div className={'modal__background'} />
      <div className="modal__wrapper">
        <div className={'modal__wrapper__dialog'}>
          {props.title && (
            <div className={'modal__wrapper__dialog__title'}>
              {props.title}
            </div>
          )}
          <div className={'modal__wrapper__dialog__content'}>
            {props.content||''}
          </div>
          <div className={'modal__wrapper__dialog__actions'}>
            <a href="#" onClick={ (e) => { e.preventDefault(); setVisibility({ value: visibility.value }) } }>&times;</a>
          </div>
        </div>
      </div>
    </div>
  )
}
