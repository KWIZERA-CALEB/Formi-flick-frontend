import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import MoviesPage from './Pages/MoviesPage'
import Contact from './Pages/Contact'
import Feedback from './Pages/Feedback'
import Premium from './Pages/Premium'




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/premium" element={<Premium />}></Route>
      </Routes>
    </>
  )
}

export default App


