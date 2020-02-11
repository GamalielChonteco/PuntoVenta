import React from 'react'

import Topbar from './Topbar'
import Container from './Container'
import Footer from './Footer'

const Content = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar />
                <Container />
            </div>
            <Footer />
        </div>
    )
}

export default Content