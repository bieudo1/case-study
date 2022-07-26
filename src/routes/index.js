import React from 'react'
import {Routes,Route} from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import UserProfilePage from '../pages/UserProfilePage';

function Router() {
  return (
      <Routes>
        <Route path="/" element = {<MainLayout/>}>
          {/* <Route index element = {<HomePage/>}/> */}
          {/* <Route path="account" element = {<AccountPage/>}/>
          <Route path="user/:userID" element = {<UserProfilePage/>}/> */}
        </Route>

        {/* <Route element = {<BlankLayout/>}> */}
          {/* <Route path="/login" element = {<LoginPage/>}/> */}
          {/* <Route path="register" element = {<RegisterPage/>}/> */}
          {/* <Route path="*" element = {<NotFoundPage/>}/>  */}
        {/* </Route> */}
      </Routes>
  )
}

export default Router ;