import React from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "../home/home";
import Login from "../login/login";
import Profile from "../profile/profile";
import Register from "../register/register";

 export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>
    )
 }