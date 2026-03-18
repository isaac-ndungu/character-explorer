import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Characters from './pages/Characters';
import About from './pages/About';

function App() {

  return (
    <div className=''>
      <Router>
        <Sidebar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/About' element={<About />} />
            <Route path='/Characters' element={<Characters />} />
          </Routes>
        
      </Router>
    </div>
  )
}

export default App