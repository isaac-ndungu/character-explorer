import React from 'react'

const statusStyles = {
    Alive: { dot: 'bg-green-400', text: 'text-green-200' },
    Dead: { dot: 'bg-red-400', text: 'text-red-200' },
    unknown: { dot: 'bg-yellow-400', text: 'text-yellow-200' }
}

function CharacterCard({ character }) {
    const status = statusStyles[character.status] || statusStyles.unknown

    return (
        <>
            <div className='bg-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-500 transition-colors duration-200'>
                <div className='relative'>
                    <img src={character.image} alt={character.name} className='w-full block' />
                    <p className={`absolute top-2 left-2 flex items-center gap-1.5 bg-black/60 rounded-xl px-2.5 py-1 text-xs font-medium ${status.text}`}>
                        <span className={`w-2 h-2 rounded-full ${status.dot}`}></span>{character.status}</p>
                </div>

                <div className='p-3'>
                    <h3 className="text-white font-semibold text-lg mb-1 truncate">{character.name}</h3>
                    <div className='flex text-gray-400 text-sm mb-3 gap-4 items-center'>
                        <p>{character.species}</p>
                        <div className='rounded-full h-1.5 w-1.5 bg-sky-500'></div>
                        <p>{character.gender}</p>
                    </div>
                    <div className="border-t border-gray-700 pt-2.5">
                        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Last Known Location</p>
                        <p className="text-gray-300 text-sm truncate">{character.location?.name}</p>

                    </div>
                    <p className="text-blue-400 text-xs mt-2.5 cursor-pointer hover:text-blue-300 transition-colors text-end pr-4">
                        View details 
                    </p>

                </div>
            </div>
        </>
    )
}

export default CharacterCard