import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-cover bg-[url("./assets/bg-01.jpg")]' >
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
  
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App