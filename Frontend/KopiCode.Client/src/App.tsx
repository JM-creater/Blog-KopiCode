// import { useState } from 'react'
import Login from './pages/login page/login'
import SignUp from './pages/sign up page/signup'
import Landing from './pages/landing page/landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { ToastContainer } from 'react-toastify';
import { toastConfig } from './utils/toastConfig';
import React from 'react';
import { UserAuthRegisterProvider } from './state/RegisterState';


function App() {

  return (
    <React.Fragment>
      <ToastContainer {...toastConfig} />
      <Router>
        <Routes>
          <Route index element={ <Landing/> }/>
          <Route path='/login' element={ <Login />}/>
          <Route 
            path='/signup' 
            element={ 
              <UserAuthRegisterProvider>
                 <SignUp />
              </UserAuthRegisterProvider>
            }
            />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
