import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Content />
    </BrowserRouter>
  )
}

export default App
