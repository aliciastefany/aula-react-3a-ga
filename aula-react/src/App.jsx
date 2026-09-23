import { useState } from 'react'
import './App.css'
import {Link, Routes, Route} from 'react-router'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function App() {
  return (
    <div id="container">
      <h1>Sejam bem-vindos a aula de React!</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/contato'>Contato</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </div>
  )
}

export default App
