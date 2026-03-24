import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'



function CharacterInfo() {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)

    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, [id])

    if (!character) return <p className='text-gray-400 text-sm'>Loading...</p>

    const fields = [
                { label: 'Status', value: character.status },
                { label: 'Species', value: character.species },
                { label: 'Gender', value: character.gender },
                { label: 'Origin', value: character.origin?.name },
                { label: 'Location', value: character.location?.name },
                { label: 'Type', value: character.type || 'N/A' },
            ];
        
    return (
        <div className='grid grid-cols-2 gap-3'>
            {fields.map(({ label, value }) => (
                <div key={label} className='bg-gray-900 border border-gray-700 rounded-xl p-4'>
                    <p className='text-gray-500 text-xs uppercase tracking-widest mb-1'>{label}</p>
                    <p className='text-white text-sm'>{value}</p>
                </div>
            ))}
        </div>
    )
}

export default CharacterInfo