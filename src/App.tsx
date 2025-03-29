import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Dream from './pages/Dream'
import Login from './pages/Authenticate/Login'
import Register from './pages/Authenticate/Register'
import MyDreams from './pages/MyDreams'
import About from './pages/About'
import NotFound from './pages/Common/NotFound'
import { Header } from './components/Header'
import background from './assets/background.jpg'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <div 
      style={{ backgroundImage: `url(${background})` }} // Usando inline style para garantir o caminho
      className={`w-full h-screen flex flex-col bg-cover bg-center bg-no-repeat`}>
        <AppRoutes />
   
      </div>

      
    </BrowserRouter>
  )
}

export default App
