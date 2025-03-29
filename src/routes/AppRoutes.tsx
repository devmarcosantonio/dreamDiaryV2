import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Dream from '../pages/Dream'
import MyDreams from '../pages/MyDreams'
import About from '../pages/About'
import NotFound from '../pages/Common/NotFound'
import Autentication from '../pages/Authenticate'
import Login from '../pages/Authenticate/Login'
import Register from '../pages/Authenticate/Register'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* Rotas de autenticação */}
      <Route path="/auth" element={<Autentication />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      <Route path="/about" element={<About />} />
      <Route path="/dream" element={<Dream />} />
      <Route path="/my-dreams" element={<MyDreams />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes