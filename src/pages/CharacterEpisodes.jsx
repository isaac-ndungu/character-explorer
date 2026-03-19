import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CharacterEpisodes() {
  const { id } = useParams()
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} `)
        }
        return response.json()
      })
      .then(data =>
        Promise.all(data.episode.map(url => fetch(url).then(response => response.json())))
      )
      .then(eps => setEpisodes(eps))
  }, [id])

  if (!episodes.length) return <p className='text-gray-400 text-sm'>Loading episodes...</p>

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
      {episodes.map(ep => (
        <div key={ep.id} className='bg-gray-900 border border-gray-700 rounded-xl p-4'>
          <p className='text-green-400 text-xs uppercase tracking-widest mb-1'>{ep.episode}</p>
          <p className='text-white text-sm'>{ep.name}</p>
          <p className='text-gray-500 text-xs mt-1'>{ep.air_date}</p>
        </div>
      ))}
    </div>
  )
}

export default CharacterEpisodes