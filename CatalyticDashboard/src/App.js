import 'regenerator-runtime/runtime'
import React,{useEffect, useState} from 'react'

import {Container,Row,Col} from 'react-bootstrap';


import getConfig from './config'


import "./app.css";


import { Routes, Route } from "react-router-dom";

import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
const { networkId } = getConfig(process.env.NODE_ENV || 'development')
function App() {
  return (
    <>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:id' element={<User />} />
        </Routes>
      </div>
    </>
  );
}
export default App;