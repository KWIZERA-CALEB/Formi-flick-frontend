import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import MoviesPage from './Pages/MoviesPage'
import Contact from './Pages/Contact'
import Feedback from './Pages/Feedback'
import Premium from './Pages/Premium'
import LoginUser from './Pages/LoginUser'
import SignupUser from './Pages/SignupUser'
import SingleMovie from './Pages/SingleMovie'
import LoginAdmin from './Pages/LoginAdmin'
import ResetPassAdmin from './Pages/ResetPassAdmin'
import ResetPassUser from './Pages/ResetPassUser'
import AdminProfile from './Pages/AdminProfile'
import UserProfile from './Pages/UserProfile'




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/premium" element={<Premium />}></Route>
        <Route path="/login" element={<LoginUser />}></Route>
        <Route path="/signup" element={<SignupUser />}></Route>
        <Route path="/movie" element={<SingleMovie />}></Route>
        <Route path="/login-admin" element={<LoginAdmin />}></Route>
        <Route path="/resetpass-admin" element={<ResetPassAdmin />}></Route>
        <Route path="/resetpass" element={<ResetPassUser />}></Route>
        <Route path="/profile-admin" element={<AdminProfile />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
      </Routes>
    </>
  )
}

export default App


