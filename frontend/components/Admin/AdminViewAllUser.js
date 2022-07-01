//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminViewAllUser() {
    let usertp = sessionStorage.getItem('Usertype')
    const [emplist, setEmpList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4500/emp')
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
                    <td>{currentrow.empname}</td>
                    <td>{currentrow.empemail}</td>
                    <td>{currentrow.empmobile}</td>
                    <td>{currentrow.empdob}</td>
                    <td>{currentrow.empgender}</td>
                    <td>{currentrow.empcountry}</td>
                    <td>{currentrow.empaddress}</td>
                </tr>
            );
        });
    }

    if (usertp == null) {
        return (<Navigate to="/adminlogin" />)
    }
    else {
        return (
            <div className='container'>
                <Navbar />
                <br />
                <h3>ALL EMPLOYEE DETAILS</h3>

                <table className="table table-bordered table-hover" align="center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Country</th>
                            <th>Address</th>
                        </tr>
                    </thead>

                    <tbody>
                        {viewEmpList()}
                    </tbody>
                </table>
            </div>)
    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default AdminViewAllUser