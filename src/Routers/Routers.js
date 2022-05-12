import React from "react";
import { Route, Routes } from "react-router-dom";

import Auth from '../Views/AuthPage/Auth'
import Register from "../Views/AuthPage/Register";
import Dashboard from '../Views/Dashboard/Dashboard'
import { Home } from '../Views/Home/Home'
import { Search } from "../Views/Search/Search";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home view="homepage" />} />
            <Route path="/search" element={<Home view="search" />} />
            <Route path="/search/result/driver=:driver&date=:date&time=:time&passenger=:passenger" element={<Search view="result" />} />
            <Route path="/search/detail/:id" element={<Search view="detail" />} />
            <Route path="/auth" element={<Auth />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/dashboard" element={<Dashboard />} />  
        </Routes>
    )
}