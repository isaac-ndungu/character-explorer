import React from 'react'

function About() {
  return (
    <div>
      <div className='p-8 max-w-2xl'>

        <h1 className='text-cyan-400 text-3xl font-bold uppercase mb-10'>About</h1>

        <div className='space-y-4'>

          <div className='bg-gray-900 border border-gray-700 rounded-xl p-5'>
            <h2 className='text-white font-semibold mb-1'>What is this?</h2>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Character Explorer is a React app that lets you browse characters from the Rick and Morty universe.
              You can view character details, their info, and every episode they appeared in.
            </p>
          </div>

          <div className='bg-gray-900 border border-gray-700 rounded-xl p-5'>
            <h2 className='text-white font-semibold mb-1'>API</h2>
            <p className='text-gray-400 text-sm leading-relaxed'>
              All data is fetched from the free public{' '}
              <a href='https://rickandmortyapi.com' target='_blank' rel='noreferrer' className='text-green-400 hover:text-green-300 transition-colors'>
                Rick and Morty API
              </a>
              . It provides 826 characters, 51 episodes, and 126 locations across all dimensions.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About