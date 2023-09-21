import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './containers/Home'
import Login from './components/Login'
import Listing from './containers/Listing'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route path="/listings" element={<Home/>} />
            <Route path="/listings/:id" element={<Listing/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    );
};

export default Router;