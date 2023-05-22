//STEP 1 -- IMPORT REACT
import React , { useEffect }from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
const Navbar=() =>{
    let usertp = sessionStorage.getItem('Usertype')
    //let usertp = localStorage.getItem('Usertype')

    let username = sessionStorage.getItem('username')

    

    if (usertp === 'ADMIN') {
        return (
            <>
            
                <nav className='navbar-container'>
                <div className='navbar-menu'>
                                <Link className='navbar-link' to="/Admin/adminafterlogin">Admin Home</Link>
                                <Link className='navbar-link'to="/Admin/adminviewalluser">View all user </Link>
                                <Link className='navbar-link' to="/Admin/adminsearchuserbyemail">Search user </Link>
                                <Link className='navbar-link' to="/Admin/admindeleteuserbyemail">Delete </Link>
                                <Link className='navbar-link' to="/Admin/adminmanageuser">Manage user</Link>
                                <Link className='navbar-link' to="/Admin/logout">Logout</Link>
                        
                    </div>
                </nav>
            </>)
    }
    else if (usertp === 'USER') {
        return (
            <>
                <br />
                <nav>
                    <Link to="/Admin/userafterlogin">USER HOME </Link> |
                    <Link to="#">VIEW DETAILS </Link> |
                    <Link to="/Admin/userprofileupdate">UPDATE PROFILE </Link>|
                    <Link to="/Admin/logout">LOGOUT </Link>
                </nav>
                <h3 style={{ color: 'brown' }}>WELCOME {username}</h3>
            </>)
    }
    else {
        return (
            <>
                <br />
                <nav>
                    
                    <Link to="/Admin/adminlogin">ADMIN </Link>
                </nav>
            </>)
    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default Navbar