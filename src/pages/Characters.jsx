import React from 'react'
import { useEffect, useState } from 'react'

function Characters() {
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
        <h2>Characters</h2>

            <div>
                {data.results.map((character) => (
                    <p key={character.id}>{character.name}</p>
                ))
                }
            </div>
    </div>
  )
}

export default Characters