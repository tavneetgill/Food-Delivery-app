import './Admin.css';
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IndexHome from '../../components/Admin/IndexHome';

import AdminLogin from '../../components/Admin/AdminLogin';
import AdminAfterLogin from '../../components/Admin/AdminAfterLogin';
import AdminViewAllUser from '../../components/Admin/AdminViewAllUser';
import AdminSearchUserByEmail from '../../components/Admin/AdminSearchUserByEmail';
import AdminDeleteUserByEmail from '../../components/Admin/AdminDeleteUserByEmail';
import AdminManageUser from '../../components/Admin/AdminManageUser';

import UserAfterLogin from '../../components/Admin/UserAfterLogin';

import Logout from '../../components/Admin/Logout';
import Footer from '../../components/homePage/Footer';

function Admin() {
  return (
    <div className="Admin">

        <Routes>
          <Route path="/" element={<IndexHome />} />
          

          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminafterlogin" element={<AdminAfterLogin />} />
          <Route path="/adminviewalluser" element={<AdminViewAllUser />} />
          <Route path="/adminsearchuserbyemail" element={<AdminSearchUserByEmail />} />
          <Route path="/admindeleteuserbyemail" element={<AdminDeleteUserByEmail />} />
          <Route path="/adminmanageuser" element={<AdminManageUser />} />

          <Route path="/userafterlogin" element={<UserAfterLogin />} />

          <Route path="/logout" element={<Logout />} />

        </Routes>
      <br/><br/>
      <br/><br/><br/>
      <br/><br/><br/>
      <Footer />
    </div>
  );
}


export default Admin;
