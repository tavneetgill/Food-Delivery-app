//STEP 1 -- IMPORT REACT
import React from 'react'
import Navbar from './Navbar'
import '../../pages/AdminPage/Admin.css';
//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function IndexHome() {
    return (
        <>
            <Navbar />
            <h3>THIS IS MY HOME PAGE</h3>
        </>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default IndexHome