import React, { useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useOutletContext } from 'react-router';

const SearchBox = () => {
    
    const inputRef = useRef(null)
    const {searchQuery , setSearchQuery } = useOutletContext()
    const handleClick =() => inputRef.current.focus()
    
  return (
      <div className="relative flex items-center gap-1">
          <input ref={inputRef} type="search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder='Search...' className={`border  border-gray-300 rounded-full focus:outline-none px-3 py-1  ml-2 text-gray-700 transition-width duration-300 ease-in-out $`} />
      <FaSearch
        size={18}
        className="cursor-pointer text-purple-600"
        onClick={handleClick}
      />
          
      </div>
  )
}

export default SearchBox