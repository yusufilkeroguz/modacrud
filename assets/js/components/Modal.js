import React, { useState } from 'react'

export default (props) => {
  return (
    <div className={`modal${ !!props.visibility ? ' --show' : ' --hide' }`}>
      <div className={'modal__background'} />
      <div className="modal__wrapper">
        <div className={'modal__wrapper__dialog'}>
          {props.title && (
            <div className={'modal__wrapper__dialog__title'}>
              {props.title}
            </div>
          )}
          <div className={'modal__wrapper__dialog__content'} dangerouslySetInnerHTML={{ __html: props.content|'' }} />
          <div className={'modal__wrapper__dialog__actions'} dangerouslySetInnerHTML={{ __html: props.actions|'' }} />
        </div>
      </div>
    </div>
  )
}
