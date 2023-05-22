import React, { useState, useEffect} from 'react'
import "./deliveryItem.css"
import { motion } from 'framer-motion'
import { useStateValue } from '../../../../context/StateProvider';
import { actionType } from '../../../../context/reducer';
import { deliveryItems } from '..';

const DeliveryItem = ({item}) => {

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

  return (
    <div>
    <div className='delivery-item-cover'>
        <img src={item.img} className='delivery-item-image' alt={item.title} />
    </div>
    <div className='delivery-item-title'>{item.name}
    <motion.button whileTap={{scale:0.8}}
                type='button'
                className='w-40 p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                hover:shadow-lg' onClick={() => setItems([...cartItems, item])}>
                     <i className="fa-solid fa-plus text-gray-50"></i>
        </motion.button>
    </div>
    </div>
  )
}

export default DeliveryItem