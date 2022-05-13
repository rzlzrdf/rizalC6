import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import userSlice from "../store/user";

import Auth from '../Views/AuthPage/Auth'
import Register from "../Views/AuthPage/Register";
import Dashboard from '../Views/Dashboard/Dashboard'
import { Home } from '../Views/Home/Home'
import { Search } from "../Views/Search/Search";

export const Routers = () => {

    const dispatch = useDispatch()

    useEffect( () => {
        try {
            const token = localStorage.getItem('userToken')
            const userData = jwtDecode(token)
            axios.get(`http:localhost:4000/users/${userData.sub}`)
            .then(res => {
                dispatch (userSlice.actions.addUser({userData:res.data}))
            })
        } catch {
            
        }
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Home view="homepage" />} />
            <Route path="/search" element={<Home view="search" />} />
            <Route path="/search/result/driver=:driver&date=:date&time=:time&passenger=:passenger" element={<Search view="result" />} />
            <Route path="/search/detail/:id" element={<Search view="detail" />} />
            <Route path="/auth" element={<Auth />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/dashboard" element={<Dashboard />}/>  
        </Routes>
    )
}