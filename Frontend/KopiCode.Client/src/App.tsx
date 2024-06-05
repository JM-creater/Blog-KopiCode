// import { useState } from 'react'
import Login from './pages/login page/login';
import SignUp from './pages/sign up page/signup'
import Landing from './pages/landing page/landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { ToastContainer } from 'react-toastify';
import { toastConfig } from './utils/toastConfig';
import React from 'react';
import { UserAuthRegisterProvider } from './state/RegisterState';
import AboutUs from './pages/AboutUs/AboutUs';
import NavigationBar from './components/Navbar.Landing/NavigationBar';
//  when user is logged in
import UserDashboard from './pages/Dashboard/User.Dashboard/UserDashboard';
import NavbarUser from './components/NavBar.UserDashboard/NavbarUser';

function App() {

  return (
    <React.Fragment>
      <ToastContainer {...toastConfig} />
      <Router>
        <Routes>
          <Route path='/' element={<NavigationBar/>}>
            <Route index element={ <Landing/> }/>
            <Route path='/login' element={ <Login />}/>
            <Route path='/aboutUs' element={ <AboutUs />}/>
          </Route>
          <Route 
            path='/signup' 
            element={ 
              <UserAuthRegisterProvider>
                 <SignUp />
              </UserAuthRegisterProvider>
            }
          />
          <Route path='/userDashboard' element={<NavbarUser/>}>
            <Route index element={  <UserDashboard/>  }/>
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
