import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from '../../components/homePage/Hero';
import Products from '../../components/homePage/Products';
import { productData} from '../../components/homePage/Products/data';
import Feature from '../../components/homePage/Feature';
import Footer from '../../components/homePage/Footer';



function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <Hero />
      <Routes>
      {/*<Route path="/Signup" element={<Signup />}/>*/}
      </Routes>
      <Products data={productData} />
      <Feature />
      <Footer />
      </div>
    
    
  
     
  );
}

export default HomePage;
