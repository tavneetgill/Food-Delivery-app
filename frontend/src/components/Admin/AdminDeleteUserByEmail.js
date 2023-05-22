//STEP 1 -- IMPORT REACT
import React, { useState } from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'
import '../../pages/AdminPage/Admin.css';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminDeleteUserByEmail() {

    const [msg, setMessage] = useState("");
    const [email, setEmpEmail] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //console.log(`Form submitted:`);
        //console.log(`EMAIL ID: ${eemail}`);

        axios.delete('http://localhost:8000/use/remove/' + email)
            .then(res => {
                console.log(res.data)
                setMessage('USER SUCCESSFULLY DELETED')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID EMAIL ID')
            })

        setEmpEmail('')
    }

    let usertp = sessionStorage.getItem('Usertype')
    if (usertp == null) {
        return (<Navigate to="/Admin/adminlogin" />)
    }
    else {
        return (
            <>
                <Navbar />
                <br />
                <h3 style={{ color: 'brown' }}>ENTER EMAIL ID FOR DELETE</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email}
                        onChange={(e) => setEmpEmail(e.target.value)}
                        placeholder="EMAIL ID"
                        required />
                    <br />
                    <br />
                    <input type="submit" value="DELETE EMPLOYEE" className="btn btn-danger" />
                </form>
            </>)
    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default AdminDeleteUserByEmail