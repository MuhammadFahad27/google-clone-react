import React from 'react';
import { FiGrid, FiMenu, FiBell, FiUser } from 'react-icons/fi';

const HomeHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 w-full">
      
      <div className="flex items-center space-x-3">
        <button className="p-2 text-gray-800 rounded-full cursor-pointer ">
          <FiMenu className="w-5 h-5" />
        </button>
      </div>
      
     
      <div className="flex items-center space-x-4">
        <a 
          href="mailto:muhammadfahadkamboh3@gmail.com" 
          className="text-gray-800 hover:underline text-sm hidden sm:inline-block"
          target='_blanka'
        >
          Gmail
        </a>
        <a 
          href="https://images.google.com" 
          className="text-gray-800 hover:underline text-sm hidden sm:inline-block"
        >
          Images
        </a>
        
      
        <button 
          className="p-2 text-gray-800 rounded-full cursor-pointer "
          aria-label="Google apps"
        >
          <FiGrid className="w-5 h-5" />
        </button>
        
       
        <button 
          className="p-2 text-gray-800 rounded-full cursor-pointer  relative"
          aria-label="Notifications"
        >
          <FiBell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
       
        <button 
          className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:ring-2 hover:ring-gray-200"
          aria-label="User profile"
        >
          <FiUser className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;