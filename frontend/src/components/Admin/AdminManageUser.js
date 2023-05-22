//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'
import '../../pages/AdminPage/Admin.css';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminManageUser() {
    let usertp = sessionStorage.getItem('Usertype')
    const [emplist, setEmpList] = useState([]);
    const [msg, setMessage] = useState("");

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
                    <td>
                        <button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        });
    }

    function removeRow(index) {
        var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
        let removerow = tempemplist.splice(index, 1);
        console.log(removerow[0].empemail)

        axios.delete('http://localhost:8000/use/remove/' + removerow[0].empemail)
            .then(res => {
                console.log(res.data)
                setMessage('SUCCESSFULLY DELETED')
                setEmpList(tempemplist)
            })
            .catch(err => {
                console.log(err)
                setMessage('PROBLEM....')
            })
    }

    if (usertp == null) {
        return (<Navigate to="/Admin/adminlogin" />)
    }
    else {
        return (
            <div>
            <Navbar />
            <div className='container'>
                
                <br />
                <h3>ALL EMPLOYEE DETAILS</h3>

                <b style={{ color: "red" }}>{msg}</b>

                <table className="table table-bordered table-hover" align="center">
                    <thead>
                        <tr>
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
export default AdminManageUser