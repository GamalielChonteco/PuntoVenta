import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Productos from '../productos/Productos'
import Usuarios from '../Usuarios'
import Valores from '../Valores'

const Container = () => {
    return (
        <Switch>
            <Route path='/productos' component={Productos} />
            <Route path='/usuarios' component={Usuarios} />
            <Route path='/valores' component={Valores} />
        </Switch>    
    )
}

export default Container