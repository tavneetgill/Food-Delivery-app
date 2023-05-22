//STEP 1 -- IMPORT REACT
import React from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import '../../pages/AdminPage/Admin.css';
import Footer from '../homePage/Footer';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminAfterLogin() {
    let usertp = sessionStorage.getItem('Usertype')

    if (usertp == null) {
        return (<Navigate to="/Admin/adminlogin" />)
    }
    else {
        return (
            <>
                <Navbar />
                <h3> THIS IS ADMIN AFTER LOGIN COMPONENT</h3>
            </>)
    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default AdminAfterLogin