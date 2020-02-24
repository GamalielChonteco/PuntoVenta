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

function App() {
	return (
		<ProductoState>
			<LineaState>
				<ImpuestoState>
					<Router>
						<Switch>
							<Route exact path='/' component={Login} />
							<Route path='/productos' component={Productos} />
							<Route path='/usuarios' component={Usuarios} />
							<Route path='/valores' component={Valores} />
						</Switch>
					</Router>
				</ImpuestoState>
			</LineaState>
		</ProductoState>
	)
}

export default App
