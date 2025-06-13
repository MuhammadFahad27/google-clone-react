import React, { useState } from 'react';
import { FiSearch, FiMic } from 'react-icons/fi';
import { useNavigate , useParams } from 'react-router-dom';

const SearchInput = () => {

  const navigate = useNavigate() ;
  const {query} = useParams() ;
  const [Query, setQuery] = useState(query || '');
  const handleQuery = (e)=>{

    if(e.key === 'Enter' && Query !== ''){

        navigate(`/${Query}/${1}`)
     


    }
  }

  return (
    <div className="relative w-full">
      <div className="flex items-center border border-gray-200 hover:shadow-md rounded-full px-4 py-3 transition-all">
      
        <input
          type="text"
          value={Query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleQuery}
          autoFocus
          className="flex-grow outline-none text-base"
          aria-label="Search"
          placeholder="Search Google or type a URL"
        />
        
       
        <div className="flex items-center space-x-3 ml-3">
         
          {Query.length > 0 && (
            <button 
              onClick={() => setQuery('')}
              className="text-gray-900 hover:text-gray-900"
              aria-label="Clear search"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          
         
          <FiSearch className="text-gray-400 cursor-pointer active:scale-105"  />
          
         
          <FiMic className="text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;