import React, { Fragment } from 'react'

import Sidebar from '../layout/Sidebar'
import Topbar from '../layout/Topbar'
import Footer from '../layout/Footer'

const Ventas = () => {

    return (
        <Fragment>
            <Sidebar />
            <div id='content-wrapper' className='d-flex flex-column'>
                <div id='content'>
                    <Topbar />
                    <div className='container-fluid'>
                        <h1 className='h3 mb-2 text-gray-800'>Ventas</h1>
                        <p className='mb-4'></p>

                        <div className='card shadow mb-4'>
                            <div className='card-header py-3'>
                                <h6 className='m-0 font-weight-bold text-primary'>Venta</h6>
                            </div>
                            <div className='card-body'>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Ventas