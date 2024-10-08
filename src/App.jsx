import { Routes, Route } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import './App.css'

export default function App () {
  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div id="footer">
        <h1>
          Colors
        </h1>
      </div>
    </div>
  )
}