import React from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "../home/home";
import Login from "../login/login";
import Profile from "../profile/profile";
import Register from "../register/register";
import Regiones from "../regiones/regiones";
import Contacto from "../contacto/contacto";
import Sitios from "../sitio/sitio";

 export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/regiones" element={<Regiones/>}/>
                <Route exact path="/sitios" element={<Sitios/>}/>
                <Route exact path="/contacto" element={<Contacto/>}/>
            </Routes>
        </Router>
    )
 }