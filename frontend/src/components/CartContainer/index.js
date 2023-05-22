import React, { useEffect, useState }from 'react'
import { motion } from 'framer-motion'
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import "./cartContainer.css"
import { foodItem } from '../../data/foodItems';
import EmptyCart from '../../emptyCart.jpg'
import CartItem from '../CartItems';
import{LinkContainer} from 'react-router-bootstrap'

const CartContainer = () => {
    
    const [{cartShow, cartItems, user}, dispatch] = useStateValue();
    const [flag, setFlag] = useState(1);
    const [tot, setTot] = useState(0);

    const showCart = () => {
      dispatch({
        type:actionType.SET_CART_SHOW,
        cartShow: !cartShow,
      })
    }

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, foodItem) {
            return accumulator + foodItem.qty * foodItem.price;
        }, 0);
        setTot(totalPrice);
        console.log(tot);
    }, [tot, flag]);

    const clearCart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: [],
        });
        localStorage.setItem("cartItems", JSON.stringify([]));
    }

  return (
    <motion.div initial={{opacity:0, x: 200}}
    animate={{opacity:1, x: 0}}
    exit={{opacity:0, x: 200}}
    className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex 
    flex-col'>
        
        <div className='w-full flex item-center justify-between p-4 cursor-pointer'>
        
         <motion.div whileTap={{scale:0.75}} onClick={showCart}><i className="fa-solid fa-arrow-left-long text-textColor text-3xl"></i> 
         </motion.div>

         <p className='text-textColor text-lg mt-1 font-semibold'>Cart</p>

         <motion.p whileTap={{scale:0.75}}
         className='flex item-center gap-2 p-1 px-2 my-1 bg-gray-100 rounded-md
         hover:shadow-md cursor-pointer text-textColor text-base'
         onClick={clearCart}>
            Clear <i className="fa-solid fa-ban mt-1"></i>{" "}
         </motion.p>
        </div>

        {/*bottom section*/}
        {cartItems && cartItems.length > 0 ? (
        <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
            {/*cart section*/}
            <div className=' cart-above-section w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hide'>
                {/*Cart Item*/}
                {cartItems && cartItems.length > 0 && cartItems.map((foodItem) => (
                    <CartItem key={foodItem.id} foodItem={foodItem} setFlag={setFlag} flag={flag}/>
                    ))}
            </div>

            {/*cart total section*/}
            <div className='w-full flex-1 bg-cartBg rounded-t-[2rem] flex flex-col items-center
            justify-evenly px-8 py-2'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg'>Subtotal</p>
                    <p className='text-gray-400 text-lg'><i className="fa-solid fa-indian-rupee-sign"></i>{tot}</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg'>Delivery</p>
                    <p className='text-gray-400 text-lg'><i className="fa-solid fa-indian-rupee-sign"></i>2.5</p>
                </div>

                <div className='w-full border-b border-gray-600 my-2'></div>

                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-200 text-xl font-semibold'>Total</p>
                    <p className='text-gray-200 text-xl font-semibold'><i className="fa-solid fa-indian-rupee-sign"></i>{tot + 2.5}</p>
                </div>
                    <LinkContainer to = "/checkout" activeClassName>
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        type="button"
                        className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                    >
                        Check Out
                    </motion.button>
                    </LinkContainer>
                
            </div>
        </div>
        ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                <img src={EmptyCart} className='w-300' alt=''/>
                <p className='text-xl text-textColor font-semibold'>
                    Add some items to your cart
                </p>
            </div>
        )}
    </motion.div>
  )
}

export default CartContainer