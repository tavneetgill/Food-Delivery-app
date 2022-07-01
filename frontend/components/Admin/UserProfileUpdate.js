//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function UserProfileUpdate() {
    let usertp = sessionStorage.getItem('Usertype')

    /*  2 Different WAYS READING DATA FROM SESSION STORAGE  */

    // METHOD 1

    /*
    function getSessionStorageValue(objkey) {
        let userinfo = JSON.parse(sessionStorage.getItem('userdetails'))
        if (userinfo == null) {
            return "";
        }
        return userinfo.keys(objkey);
    }

    const [ename, setEmpName] = useState(getSessionStorageValue("empname"));
    const [eemail, setEmpEmail] = useState(getSessionStorageValue("empemail"));
    const [emobile, setEmpmobile] = useState(getSessionStorageValue("empmobile"));
    const [epass, setEmpPass] = useState(getSessionStorageValue("emppass"));
    const [eaddress, setEmpAddress] = useState(getSessionStorageValue("empaddress"));
    const [msg, setMessage] = useState("");
    */

    // METHOD 2
    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [epass, setEmpPass] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [msg, setMessage] = useState("");

    useEffect(() => {
        let userinfo = JSON.parse(sessionStorage.getItem('userdetails'))
        setEmpName(userinfo.empname)
        setEmpEmail(userinfo.empemail)
        setEmpmobile(userinfo.empmobile)
        setEmpPass(userinfo.emppass)
        setEmpAddress(userinfo.empaddress)
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            emppass: epass,
            empaddress: eaddress
        }

        axios.put('http://localhost:4500/emp/update', empinfo)
            .then(res => {
                console.log(res.data)
                sessionStorage.setItem("userdetails", JSON.stringify(res.data))
                setMessage('PROFILE UPDATED')
            })
            .catch(err => console.log(err))

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpPass('')
        setEmpAddress('')
    }

    if (usertp == null) {
        return (<Navigate to="/login" />)
    }
    else {
        return (
            <>
                <Navbar />
                <br />
                <h3>PROFILE UPDATE</h3>
                <b style={{ color: "red" }}> {msg}</b>
                <form onSubmit={handleSubmit}>
                    <label>NAME: </label> <br />
                    <input type="text" value={ename}
                        onChange={(e) => setEmpName(e.target.value)} placeholder="Enter Name"
                        readOnly />
                    <br /><br />

                    <label>EMAIL: </label> <br />
                    <input type="email" value={eemail}
                        onChange={(e) => setEmpEmail(e.target.value)} placeholder="Enter Email"
                        readOnly />
                    <br /><br />

                    <label>MOBILE: </label> <br />
                    <input type="number" value={emobile}
                        onChange={(e) => setEmpmobile(e.target.value)} placeholder="Enter Mobile No"
                        required />
                    <br /><br />

                    <label>PASSWORD: </label> <br />
                    <input type="password" value={epass}
                        onChange={(e) => setEmpPass(e.target.value)} placeholder="Enter Password"
                        required />
                    <br /><br />

                    <label>ADDRESS: </label> <br />
                    <textarea value={eaddress}
                        onChange={(e) => setEmpAddress(e.target.value)} rows="3" >
                    </textarea>
                    <br /><br />

                    <input type="submit" value="UPDATE PROFILE" className="btn btn-primary" />
                    <br /><br />
                </form>
            </>)
    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default UserProfileUpdate