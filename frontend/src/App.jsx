import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Blog from './components/Blog'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup></Signup>} ></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
