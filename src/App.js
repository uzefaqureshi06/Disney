import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Hero from './components/Hero'
import Login from './components/Login'
import Pan from './components/Pan'
import Por from './components/tv/Por.jsx'
import Papa from './components/Papa.jsx'
import Slide from './components/tv/Slide.jsx'







const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Hero />
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/pan' element={<Pan />} />
          <Route path='/por' element={<Por />} />
          <Route path='/papa' element={<Papa />} />
          <Route path='/slide' element={<Slide/>} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App
