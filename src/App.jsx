import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import { Layout } from './pages/Layout'
import { Usuarios } from './pages/components/Usuarios'
import { User } from './pages/components/User'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Usuarios />} />
          <Route path='*' element={<Usuarios />} />
          <Route path='user/:id' element={<User/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
