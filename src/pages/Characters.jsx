import React from 'react'
import { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard';

export function Characters() {
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
        <h1 className="font-display text-4xl font-bold text-cyan-400 uppercase py-8 px-10">Characters</h1>            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl gap-4 px-10'>
                {data.results.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                    
                ))
                }
                
            </div>
    </div>
  )
}

export default Characters