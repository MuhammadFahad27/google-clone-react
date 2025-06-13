import React, { useContext, useEffect } from 'react'
import HomeHeader from './HomeHeader'
import logo from '../assets/logo.png'
import SearchInput from './SearchInput'
import Footer from './Footer'
import { imageContext } from '../Context/context'

const Home = () => {

 
  return (
    <main className="min-h-screen flex flex-col ">
     
      <HomeHeader />
      
      <section className="flex-grow flex flex-col items-center mt-8 sm:mt-12 px-4 ">
        <div className="w-full max-w-2xl flex flex-col items-center">
         
          <div className="mb-6 sm:mb-8 w-full flex justify-center">
            <img 
              src={logo} 
              alt="Google" 
              className="w-32 sm:w-40 h-auto" 
            />
          </div>
          
         
          <div className="w-full mb-8">
            <SearchInput />
          </div>
          
        
          <div className="flex flex-row space-x-4 sm:flex-row  sm:space-y-0 sm:space-x-4 justify-center">
            <button className="px-4 py-2 bg-gray-100 text-sm text-gray-800 rounded hover:shadow hover:bg-gray-50 transition-all">
              Google Search
            </button>
            <button className="px-4 py-2 bg-gray-100 text-sm text-gray-800 rounded hover:shadow hover:bg-gray-50 transition-all">
              I'm Feeling Lucky
            </button>
          </div>
          
         
          <div className="mt-8 text-sm text-center">
            <p className="text-gray-600">
              Google offered in: 
              <a href="#" className="text-blue-600 ml-1 hover:underline">Español</a>
              <a href="#" className="text-blue-600 ml-2 hover:underline">Français</a>
              <a href="#" className="text-blue-600 ml-2 hover:underline">中文</a>
            </p>
          </div>
        </div>
      </section>
      
     
     <Footer/>
    </main>
  )
}

export default Home