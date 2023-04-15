// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Details from './pages/Details/Details'
import Resume from './pages/Resume/Resume'
import Contact from './pages/Contact/Contact'
import SideEmail from './components/SideEmail/SideEmail'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Projects/>
        {/* <Details />
        <Resume />
        <Contact /> */}
      </div>

    </div>
  )
}

export default App
