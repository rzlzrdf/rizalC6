import React from "react";
import { Route, Routes } from "react-router-dom";

import Auth from '../Views/Auth'
import Dashboard from '../Views/Dashboard'
import Landing from '../Views/Landing'

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} /> 
            <Route path="/auth" element={<Auth />} /> 
            <Route path="/dashboard" element={<Dashboard />} />  
        </Routes>
    )
}