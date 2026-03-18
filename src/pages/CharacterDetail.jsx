import React from "react";
import { useParams, NavLink, Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} `);
        }
        return response.json();
      })
      .then((data) => setCharacter(data))
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) return <p className="text-red-400 p-6">Error: {error}</p>;
  if (!character) return <p>Loading...</p>;

  const tabClass = ({ isActive }) =>
    `px-4 py-2 text-sm border-b-2 transition-colors duration-150
    ${isActive
      ? 'border-green-400 text-green-400'
      : 'border-transparent text-gray-500 hover:text-gray-300'
    }`
  return (
    <div>
      <div className='p-6'>

      <NavLink to='/characters' className='text-gray-500 text-sm hover:text-white mb-6 flex items-center gap-1 transition-colors'>  Back </NavLink>

      <div className='flex items-center gap-6 mb-6'>
          <img src={character.image} alt={character.name} className='w-24 h-24 rounded-xl object-cover' />
          <div>
              <h1 className='text-white text-2xl font-semibold'>{character.name}</h1>
              <p className='text-gray-500 text-sm mt-1'>{character.species} · {character.gender}</p>
          </div>
      </div>

      <div className='flex gap-2 border-b border-gray-700 mb-6'>
          <NavLink to={`/characters/${id}/info`} className={tabClass}>Info</NavLink>
          <NavLink to={`/characters/${id}/episodes`} className={tabClass}>Episodes</NavLink>
      </div>

      <Outlet />

    </div>
    </div>
  );
}

export default CharacterDetail;
