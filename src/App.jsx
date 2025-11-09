import { useState } from 'react'
// import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
