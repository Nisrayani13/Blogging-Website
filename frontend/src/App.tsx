import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from "./pages/Publish";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup></Signup>} ></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/blog/:id' element={<Blog></Blog>}></Route>
        <Route path="/publish" element={<Publish></Publish>}></Route>
        <Route path="/navbar" element={<Navbar></Navbar>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
