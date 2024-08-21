import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Daily from '../pages/daily/daily'
import AuthCallback from '../contexts/authCallback';
import NotFound from '../pages/404/404';
import Home from '../pages/home/Home';

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/daily' element={<Daily/>}/>
            <Route path='/authCallback' element={<AuthCallback/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;