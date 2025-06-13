import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import SearchResult from './Components/SearchResult'
import { imageContext } from './Context/context'

const App = () => {

  const [image , setImage] = useState(false) ; // global state 
  return (
    <>
    <imageContext.Provider value={{image , setImage}}>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:query/:startIndex' element={<SearchResult/>}/>

        

      </Routes>
      </BrowserRouter>

    </imageContext.Provider>
     
    </>
  )
}

export default App