import NavBar from './components/NavBar/NavBar';
import{BrowserRouter,Route,Routes}from 'react-router-dom'
import Admin from './pages/AdminPage/Admin';
import About from './components/About';
import OrderOnline from './pages/orderOnline';
import'./index.css';
import HomePage from './pages/homepage/HomePage';
import Checkout from './components/checkout';
import DeliveryAddress from './components/checkout';
import ContactPage from './components/Contact/ContactPage';
import Login from './components/accountBox/login';
import Register from './components/accountBox/signup';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/homepage/*" element={<HomePage />} exact/>
        <Route path="/Admin/*" element={<Admin/>} />
        <Route path="/Accounts/*" element={<Login />} exact />
        <Route path="/Signup" element={<Register />} exact />
        <Route path="/OrderOnline/*" element={<OrderOnline/>} exact />
        <Route path="/about/*" element={<About/>} exact />
        <Route path="/Contact/*" element={<ContactPage/>} exact />
        <Route path="/checkout/*" element={<Checkout />} exact/>
        <Route path="*" element={<Login />} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;