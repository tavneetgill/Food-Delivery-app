import NavBar from './components/NavBar/NavBar';
import{BrowserRouter,Route,Routes}from 'react-router-dom'
import Admin from './components/Admin';
import About from './components/About';
import Contact from './components/Contact/contactUs';
import OrderOnline from './pages/orderOnline';
import'./index.css';
import HomePage from './pages/homepage/HomePage';
import Login from './pages/registrationPage/login';
import Checkout from './pages/checkout/checkout';
import ContactUs from './components/Contact/contactUs';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/homepage" element={<HomePage />} exact/>
        <Route path="/Admin" element={<Admin/>} exact />
        <Route path="/Accounts" element={<Login />} exact />
        <Route path="/OrderOnline" element={<OrderOnline/>} exact />
        <Route path="/about" element={<About/>} exact />
        <Route path="/Contact" element={<ContactUs/>} exact />
        <Route path="/checkout" element={<Checkout />} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;