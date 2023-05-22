//STEP 1 -- IMPORT REACT
import React from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import '../../pages/AdminPage/Admin.css';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function UserAfterLogin() {
    let usertp = sessionStorage.getItem('Usertype')

    if (usertp == null) {
        return (<Navigate to="/login" />)
    }
    else {
        return (
            <>
                <Navbar />
                <h3> THIS IS USER AFTER LOGIN COMPONENT</h3>
            </>)
    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default UserAfterLogin