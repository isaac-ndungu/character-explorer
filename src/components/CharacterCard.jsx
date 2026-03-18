import React from 'react'


function CharacterCard({ character }) {

    return (
        <>
            <div>
                <div>
                    <img src={character.image} alt={character.name} />
                    <p>{character.status}</p>
                </div>

                <div>
                    <h3>{character.name}</h3>
                    <div className='flex'>
                        <p>{character.species}</p>
                        <p>{character.gender}</p>
                    </div>
                    <div>
                        <p>{character.location?.name}</p>
                        <p>view</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CharacterCard