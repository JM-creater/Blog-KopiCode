// import { useState } from 'react'
import Login from './pages/login page/login'
import SignUp from './pages/sign up page/signup'
import Landing from './pages/landing page/landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={ <Landing/> }/>
          <Route path='/login' element={<Login  />}/>
          <Route path='/signup' element={<SignUp  />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
