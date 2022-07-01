//STEP 1 -- IMPORT REACT
import React from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminAfterLogin() {
    let usertp = sessionStorage.getItem('Usertype')

    if (usertp == null) {
        return (<Navigate to="/adminlogin" />)
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