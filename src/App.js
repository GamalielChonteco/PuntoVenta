import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Sidebar from './components/layout/Sidebar'
// import Content from './components/layout/Content'
import Login from './components/auth/Login'
import Productos from './components/productos/Productos'
import Usuarios from './components/usuarios/Usuarios'
import Valores from './components/Valores/Valores'

import ProductoState from './context/productos/productoState'
import LineaState from './context/lineas/lineaState'
import ImpuestoState from './context/impuestos/impuestoState'
import AuthState from './context/autenticacion/authState'
import tokenAuth from './config/tokenAuth'
import RutaPrivada from './components/rutas/RutaPrivada'
import UsuarioState from './context/usuarios/usuarioState'
import Perfil from './components/usuarios/Perfil'

// Revisar si hay token
const token = localStorage.getItem('token')

if (token) {
	tokenAuth(token)
}

function App() {
	return (
		<ProductoState>
			<LineaState>
				<ImpuestoState>
					<UsuarioState>
						<AuthState>
							<Router>
								<Switch>
									<Route exact path='/' component={Login} />
									<RutaPrivada path='/productos' component={Productos} />
									<RutaPrivada path='/usuarios' component={Usuarios} />
									<RutaPrivada path='/valores' component={Valores} />
									<RutaPrivada path='/perfil' component={Perfil} />
								</Switch>
							</Router>
						</AuthState>
					</UsuarioState>
				</ImpuestoState>
			</LineaState>
		</ProductoState>
	)
}

export default App
