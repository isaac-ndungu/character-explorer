import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'CHARACTERS', value: '826' },
  { label: 'EPISODES', value: '51' },
  { label: 'LOCATIONS', value: '126' },
  { label: 'DIMENSIONS', value: '∞' },
]

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} `)
        }
        return response.json()
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message))

  }, []);

  if (error) return <p>Error: {error}</p>
  if (!data) return <p>Loading...</p>

  return (
    <div>
      <h1 className='font-display text-4xl font-bold text-cyan-400 uppercase py-8 px-10'>Character Explorer</h1>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10 px-10 max-w-6xl w-full text-center mt-12'>
        {stats.map((stat, i) => (
          <div key={stat.label} className='bg-gray-900 border border-gray-700 rounded-xl py-8 px-20' >

            <div className='text-4xl font-semibold text-green-400 mb-4'> {stat.value} </div>

            <div className='text-sm text-gray-500 uppercase tracking-widest'> {stat.label} </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-10 w-full'>

        <Link to='/characters' className='bg-gray-900 border border-gray-700 rounded-xl p-10 flex items-center justify-between hover:border-green-800 hover:bg-gray-900/80 transition-colors duration-200' >
          <div>
              <p className='text-xs text-gray-500 uppercase tracking-widest mb-2'>Explore</p>
              <p className='text-3xl font-semibold text-white mb-2'>Characters</p>
              <p className='text-sm text-gray-500'>Browse all characters across every dimension</p>
          </div>
        </Link>

        <Link to='/about' className='bg-gray-900 border border-gray-700 rounded-xl p-10 flex items-center justify-between hover:border-green-800 hover:bg-gray-900/80 transition-colors duration-200' >
          <div>
              <p className='text-xs text-gray-500 uppercase tracking-widest mb-2'>Learn</p>
              <p className='text-3xl font-semibold text-white mb-2'>About</p>
              <p className='text-sm text-gray-500'>About this app</p>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Dashboard