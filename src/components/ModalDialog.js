import React from 'react'

const ModalDialog = ({ idModal, text, accion }) => {
    return (
        <div className='modal fade' id={idModal} tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>Advertencia</h5>
                        <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>×</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        {text}
                    </div>
                    <div className='modal-footer'>
                        <button className='btn btn-danger' type='button' data-dismiss='modal'>Cancelar</button>
                        <button className='btn btn-primary' onClick={accion} data-dismiss='modal'>Continuar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDialog