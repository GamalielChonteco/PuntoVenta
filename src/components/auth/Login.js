import React, { useState, useContext, useEffect } from 'react'
import authContext from '../../context/autenticacion/authContext'

const Login = props => {

    const AuthContext = useContext(authContext)
    const { mensaje, autenticado, iniciarSesion, usuarioAutenticado } = AuthContext

    useEffect(() => {
        usuarioAutenticado()
        if (autenticado) {
            props.history.push('/productos')
        } 
    }, [mensaje, autenticado, props.history])

    const [usuario, setUsuario] = useState({
        username: '',
        password: ''
    })

    const { username, password } = usuario

    const actualizar = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        // onSubmit
        iniciarSesion({ username, password })
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-5'>
                    <div className='card o-hidden border-0 shadow-lg my-5'>
                        <div className='card-body p-0'>
                            <div className='row'>
                                <div className='col-xl-10 col-lg-12 col-md-9'>
                                    <div className='p-5'>
                                        <div className='text-center'>
                                            <h1 className='h4 text-gray-900 mb-4'>Bienvenido</h1>
                                        </div>
                                        <form className='user' onSubmit={onSubmit}>
                                            <div className='form-group'>
                                                <input onChange={actualizar} value={username} type='text' name='username' className='form-control form-control-user' id='exampleInputEmail' aria-describedby='emailHelp' placeholder='Usuario' />
                                            </div>
                                            <div className='form-group'>
                                                <input onChange={actualizar} value={password} type='password' name='password' className='form-control form-control-user' id='exampleInputPassword' placeholder='Constraseña' />
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