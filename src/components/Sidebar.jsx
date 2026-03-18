import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <div>
            <h1>Rick and Morty</h1>
            <p>Character Explorer</p>
        </div>

        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/characters'>Characters</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar