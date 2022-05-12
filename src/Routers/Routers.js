import React from "react";
import { Route, Routes } from "react-router-dom";

import Auth from '../Views/AuthPage/Auth'
import Dashboard from '../Views/Dashboard/Dashboard'
import Landing from '../Views/LandingPage/Landing'

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} /> 
            <Route path="/auth" element={<Auth />} /> 
            <Route path="/dashboard" element={<Dashboard />} />  
        </Routes>
    )
}