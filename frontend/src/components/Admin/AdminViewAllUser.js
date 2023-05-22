//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'
import '../../pages/AdminPage/Admin.css';
import Footer from '../homePage/Footer';
import './Navbar.css'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminViewAllUser() {
    let usertp = sessionStorage.getItem('Usertype')
    const [emplist, setEmpList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/use')
            .then(response => {
                console.log(response.data)
                setEmpList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewEmpList() {
        return emplist.map((currentrow, index) => {
            return (
                <tr key={index}>
                     <td>{currentrow.name}</td>
                    <td>{currentrow.email}</td>
                </tr>
            );
        });
    }

    if (usertp == null) {
        return (<Navigate to="/Admin/adminlogin" />)
    }
    else {
        return (
            <div className='Admin'>
            <Navbar />
            <h3 className='user-header'>ALL USER DETAILS</h3>
            <div className='container mt-20 w-full p-2 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                <br />

                <table className="mt-2 styled-table mb-2 mr-2" align="center">
                    <thead>
                        <tr className='active-row'>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {viewEmpList()}
                    </tbody>
                </table>
            </div>
            </div>)
    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default AdminViewAllUser