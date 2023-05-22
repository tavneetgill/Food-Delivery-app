import React, { useEffect, useState } from 'react'
import "./foodCollection.css"
import { motion } from 'framer-motion';
import { useStateValue } from '../../../../context/StateProvider';
import { actionType } from '../../../../context/reducer';
import SearchBar from '../../../SearchBar';


const FoodCollection = ({foodItem}) => {
  const name=foodItem.name;
  const coverImg = foodItem.img;
  const rating= foodItem.rating;
  const approxPrice= foodItem.price;
  const cuisines= foodItem.category;
  
  const [{cartItems}, dispatch] = useStateValue();

  const [items, setItems] = useState([]);
 

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  }
  
  useEffect(() => {
    addtocart();
  },[items]);
  
  
  /*const bottomContainers=restaurant?.bottomContainers;
  const goldOff= restaurant?.gold?.text;
  const proOff=offers.length>1?offers[0].text : null;
  const discount=offers.length>1?offers[1].text:offers.length===1?offers[0].text:null;
  */

  return (
    <div className='food-card cur-po'>
      <div className='food-card-cover' key={foodItem.id}>
        <img src={coverImg} alt={name} className='food-card-image' />
        {/*<div className='delivery-time'>{deliveryTime}</div>
        {proOff && <div className='pro-off'>{proOff}</div>}
        {goldOff && <div className='gold-off absolute-center'>{goldOff}</div>}
        {discount && <div className='discount absolute-center'>{discount}</div>}*/}
      </div>
      <div className='res-row'>
        <div className='res-name'>{name}</div>
        {rating && (
        <div className='res-rating absolute-center'>
          {rating} <i className="fa-solid fa-star absolute-center"></i>
          </div>
          )}
      </div>
      <div className='res-row'>
        <div className='res-cuisine'>
          <span className='res-cuisine-tag'>{cuisines}</span>
          </div>
           {approxPrice && <div className='res-price'>
          <i className="fa-solid fa-indian-rupee-sign"></i>{approxPrice}</div>}
      </div>
        <div className='card-separator'></div>
        <motion.button whileTap={{scale:0.8}}
                type='button'
                className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                hover:shadow-lg ' onClick={() => setItems([...cartItems, foodItem])}>
                    Add to Cart
        </motion.button>
    </div>
  )
}

export default FoodCollection