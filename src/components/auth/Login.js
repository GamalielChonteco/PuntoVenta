import React, { useState, useContext, useEffect } from 'react'
import authContext from '../../context/autenticacion/authContext'

const Login = props => {

    // Extraemos al usuario autenticado de Auth
    const AuthContext = useContext(authContext)
    const { mensaje, autenticado, iniciarSesion } = AuthContext

    // Validamos si el usuario se encuentra autenticado y pasarlo a la pantalla de inicio
    useEffect(() => {
        if (autenticado) {
            props.history.push('/ventas')
        } 
    }, [mensaje, autenticado, props.history])

    // Inicializamos el state
    const [usuario, setUsuario] = useState({
        username: '',
        password: ''
    })

    // Extraemos datos del state
    const { username, password } = usuario
    
    // Cambiar valores del state
    const actualizar = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // Envio de formulario
    const onSubmit = async e => {
        e.preventDefault()

        // onSubmit
        await iniciarSesion({ username, password })
        setUsuario({
            ...usuario,
            password: ''
        })
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-xl-5 col-lg-5 col-md-8'>
                    <div className='card o-hidden border-0 shadow-lg my-5'>
                        <div className='card-body p-0'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='p-5'>
                                        <div className='text-center'>
                                            <h1 className='h4 text-gray-900 mb-4'>Bienvenido</h1>
                                        </div>
                                        <form className='user' onSubmit={onSubmit}>
                                            <div className='form-group'>
                                                <input onChange={actualizar} value={username} type='text' name='username' className='form-control form-control-user' id='exampleInputEmail' aria-describedby='emailHelp' placeholder='Usuario' />
                                            </div>
                                            <div className='form-group'>
                                                <input onChange={actualizar} value={password} type='password' name='password' className='form-control form-control-user' id='exampleInputPassword' placeholder='Contraseña' />
                                            </div>
                                            <button type='submit' className='btn btn-primary btn-user btn-block'>
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login