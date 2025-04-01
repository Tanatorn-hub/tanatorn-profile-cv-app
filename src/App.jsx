import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import HomeUI from './views/HomeUI'

function App() {
  return (
    <>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeUI />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App