//STEP 1 -- IMPORT REACT
import React from 'react'
import { Navigate } from "react-router-dom";
import '../../pages/AdminPage/Admin.css';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Logout() {

    sessionStorage.removeItem('Usertype')
    sessionStorage.clear()
    //localStorage.removeItem('Usertype')

    return (<Navigate to="/Admin" />)

}

//STEP 3 -- EXPORT IT TO USE IT
export default Logout