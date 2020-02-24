import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import TablaUsuarios from './TablaUsuarios'
import ModalUsuarios from './ModalUsuarios'

const Usuarios = () => {

    const [usuarios, setUsuario] = useState([])


    useEffect(() => {
        obtenerUsuarios()
    }, [])

    const obtenerUsuarios = async () => {
        const url = 'http://localhost:5000/usuario'

        const usuarios = await axios.get(url)

        setUsuario(usuarios.data)
    }

    if (usuarios.length === 0) return <div className='container-fluid h3 mb-2 text-gray-800'>Cargando...</div>

    return (
        <Fragment>
            <div className='container-fluid'>
                <h1 className='h3 mb-2 text-gray-800'>Usuarios</h1>
                <p className='mb-4'></p>

                <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                        <h6 className='m-0 font-weight-bold text-primary'>Usuarios<Link to='#' data-toggle='modal'
                            data-target='#usuariosModal'><i className='fas fa-user-plus fa-lg'
                                style={{ float: 'right' }} title='Agregar Usuario'></i></Link>
                        </h6>
                    </div>
                    <div className='card-body'>
                        <div className='table-responsive'>
                            <TablaUsuarios usuarios={usuarios} />
                        </div>
                    </div>
                </div>
            </div>
            <ModalUsuarios usuarios={usuarios} />
        </Fragment>
    )
}

export default Usuarios