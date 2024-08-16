import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Daily from '../pages/daily/daily'
import AuthCallback from '../contexts/authCallback';

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Daily/>}/>
            <Route path='/authCallback' element={<AuthCallback/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;