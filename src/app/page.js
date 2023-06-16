"use client"

import Rolate from '@/components/Rolate';
import { useState } from 'react';

function Home() {
  const [rolateName, setRolateName] = useState("")

  function onSubmit(e){
    e.preventDefault();
    if(e.target.elements.rolatename.value && e.target.elements.rolatename.value!== "") {
      setRolateName(e.target.elements.rolatename.value)
    }
  }

  if(rolateName && rolateName !== "") {
    return <Rolate name={rolateName} />
  }
  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Rolate name"
            aria-label="Rolate name"
            name='rolatename'
            id='rolatename'
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
