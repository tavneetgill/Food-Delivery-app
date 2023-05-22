//STEP 1 -- IMPORT REACT
//For BINDING DATA USING REACT HOOKS import {useState}
import React, { useState } from 'react'
import Navbar from './Navbar'
import '../../pages/AdminPage/Admin.css';

import { useNavigate } from "react-router-dom";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminLogin() {
    //CREATE VARIABLES ACCORDING TO THE UI
    const [adminuserid, setAdminUserId] = useState("");
    const [adminpassword, setAdminPassword] = useState("")
    const [msg, setMessage] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(`ADMIN UID: ${adminuserid}`);
        console.log(`PASSWORD: ${adminpassword}`);

        if ((adminuserid === "admin") && (adminpassword === "admin")) {
            console.log('WELCOME ADMIN')
            sessionStorage.setItem("Usertype", 'ADMIN')
            //localStorage.setItem("Usertype", 'ADMIN')
            navigate('/Admin/adminafterlogin')
        }
        else {
            setMessage('INVALID UID OR PASSWORD')
        }
        setAdminUserId('')
        setAdminPassword('')
    }

    return (
        <>
            <Navbar />

            <div className="container">

                <br />
                <br />

                <div className="row">
                    <div className="col-md-6 col-sm-8 mx-auto">
                        <div className="card">
                            <div className="card-body" style={{ backgroundColor: "#eeefff" }}>
                                <div className="text-center">
                                    <h3 style={{ color: "brown" }}>ADMIN LOGIN</h3>
                                </div>

                                <b style={{ color: "red" }}>{msg}</b>

                                <div className="text-left">
                                    <form onSubmit={handleSubmit} name='login'>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="fw-bold text-primary">ADMIN ID *</label>
                                            <input type="text" value={adminuserid}
                                                onChange={(e) => setAdminUserId(e.target.value)}
                                                name="adminid" className="form-control" placeholder="Enter User Id" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="password" className="fw-bold text-primary">PASSWORD *</label>
                                            <input type="password" value={adminpassword}
                                                onChange={(e) => setAdminPassword(e.target.value)}
                                                name="password" className="form-control" placeholder="Enter Password" />
                                        </div>

                                        <div className="d-grid">
                                            <input type="submit" className="btn btn-danger" value="LOGIN" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default AdminLogin