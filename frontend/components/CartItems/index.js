import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

let items = [];

const CartItem = ({foodItem, setFlag, flag}) => {
    const [qty, setQty] = useState(foodItem.qty);
    const [{cartItems}, dispatch] = useStateValue();

    const updateQty = (action, id) => {
        if(action === "add"){
            setQty(qty + 1);
             cartItems.map((foodItem) => {
                if(foodItem.id === id) {
                    foodItem.qty += 1;
                    setFlag(flag + 1);
                }
             });
             cartDispatch();
        }else {
            if(qty === 1){
                items = cartItems.filter((foodItem)=> foodItem.id !== id);
                setFlag(flag + 1);
                cartDispatch();
            }else {
                setQty(qty - 1);
                cartItems.map((foodItem) => {
                    if(foodItem.id === id) {
                        foodItem.qty -= 1;
                        setFlag(flag + 1);
                    }
                 });
                 cartDispatch();
            }
        }
    }

    const cartDispatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        })
    }

   useEffect(() => {
     items = cartItems;
   }, [qty, items]);
   
    
  return (
    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                    <img src={foodItem.img} alt='' className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>

                    {/*name section*/}
                    <div className='flex flex-col '>
                        <p className='-mb-1 text-base text-gray-50'>{foodItem.name}</p>
                        <p className='-mb-1 text-md block text-gray-300 font-semibold'><i className="fa-solid fa-indian-rupee-sign"></i>
                        {parseFloat(foodItem.price) * qty}</p>
                    </div>

                    {/*button section*/}
                    <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                        <motion.div whileTap={{scale: 0.75}} onClick={()=> updateQty('remove',foodItem.id)}>
                        <i className="fa-solid fa-minus text-gray-50"></i>
                        </motion.div>
                        <p className='w-5 h-5 mt-3 rounded-sm bg-castBg flex items-center justify-center text-gray-50'>
                        {qty}
                        </p>
                        <motion.div whileTap={{scale:0.75}} onClick={()=> updateQty('add',foodItem.id)}>
                        <i className="fa-solid fa-plus text-gray-50"></i>
                        </motion.div>
                    </div>
    </div>
  )
}

export default CartItem