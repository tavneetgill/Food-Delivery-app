//STEP 1 -- IMPORT REACT
import React, { useState } from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'
import '../../pages/AdminPage/Admin.css';
import './Navbar.css'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminSearchUserByEmail() {

    const [eemail, setEmpEmail] = useState("");
    const [msg, setMessage] = useState("");
    const [emplist, setEmpList] = useState([]);
    const [status, setStatus] = useState(false);

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

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('http://localhost:8000/use/search/' + eemail)
            .then(res => {
                console.log(res.data)
                setEmpList(res.data)
                setStatus(true)
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID EMAIL ID')
                setStatus(false)
            })

        setEmpEmail('')
    }

    let usertp = sessionStorage.getItem('Usertype')
    if (usertp == null) {
        return (<Navigate to="/Admin/adminlogin" />)
    }
    else {
        if (status === false) {
            return (
                <>
                    <Navbar />
                    <br />
                    <h3 style={{ color: 'brown' }}>ENTER EMAIL ID FOR SEARCH</h3>
                    <b style={{ color: "red" }}>{msg}</b>
                    <form onSubmit={handleSubmit}>
                        <input type="email" value={eemail}
                            onChange={(e) => setEmpEmail(e.target.value)}
                            placeholder="EMAIL ID"
                            required />
                        <br />
                        <br />
                        <input type="submit" value="SEARCH EMPLOYEE" className="btn btn-success" />
                    </form>
                </>)
        }
        else {
            return (
                <>
                    <Navbar />
                    <br />
                    <h3  className='user-header'style={{ color: 'black' }}>ENTER EMAIL ID FOR SEARCH</h3>
                    <b style={{ color: "red" }}>{msg}</b>
                    <form onSubmit={handleSubmit}>
                        <input type="email" value={eemail}
                            onChange={(e) => setEmpEmail(e.target.value)}
                            placeholder="EMAIL ID"
                            required className='input-field'/>
                        <br />
                        <br />
                        <input type="submit" value="SEARCH EMPLOYEE" className="btn p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg" />
                    </form>
                    <br />
                    <div className='container mt-20 w-full p-2 px-2 rounded-lg bg-cartItem flex items-center gap-2'>

                        <h3 className='user-header' style={{ color: 'white', fontSize: '30px' }}>All User Details</h3>

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
                </>)
        }

    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default AdminSearchUserByEmail