import React, { useState, useRef, useEffect, Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../context/StateProvider';
import { actionType } from '../../../context/reducer';
import { foodItem } from '../../../data/foodItems';
import FoodCollection from '../../delivery/foodSection/foodCollection';
import SearchBar from '../../SearchBar';
import FoodSection from '../../delivery/foodSection'
import {GpsFixed} from '@material-ui/icons'

const Header = () => {
  const [{cartShow, cartItems}, dispatch] = useStateValue();
  const [inputSearch, setInputSearch] = useState('');
  

  const showCart = () => {
    dispatch({ 
      type:actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    })
  }

  return (
    <div className='max-width header'>
      {/*<img src = 'https://images.vexels.com/media/users/3/199964/isolated/preview/ae782cab8ae7e722febb5869c09574cc-happy-delivery-boy-character-by-vexels.png' alt='logo' className='header-logo'/>*/}
      <div className='header-right'>
          <div className='header-location-search-container'>
            <div className='location-wrapper'>
              <div className='location-icon-name'>
              <i className="fi fi-sr-marker absolute-center location-icon"></i>
              <div className='search'> 
                <input type='text' placeholder='Search Location...' className='location-search'/>
              </div>
              </div>
              <button><GpsFixed /></button>
            </div>
          </div>

          <div className="relative flex item-center justify-center ml-60" onClick={showCart}>
            <i className="fa-solid fa-cart-shopping text-textColor text-2xl ml-8 cursor-pointer"></i>
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg
              flex items-center justify-center">
                <p className='text-xs text-white font-bold mt-3'>{cartItems.length}</p>
              </div>
            )}

          </div>

          <div className='profile-wrapper'>
          <i className="fa fa-user-circle header-profile-icon"></i>
          <span className='header-username'>UserName</span>
          <i className="fa fa-angle-down absolute-center profile-options-icon"></i>
          </div>
      </div>
    </div>
  )
}

export default Header