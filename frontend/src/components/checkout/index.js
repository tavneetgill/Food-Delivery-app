import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './checkout.css'
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import { motion } from 'framer-motion'
import Footer from '../homePage/Footer';
import swal from 'sweetalert';

let items = [];

const Checkout = (foodItem) => {
    const [qty, setQty] = useState(foodItem.qty);
    const [{cartItems}, dispatch] = useStateValue();
    const [tot, setTot] = useState(0);
    const [flag, setFlag] = useState(1);

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
   
   useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, foodItem) {
        return accumulator + foodItem.qty * foodItem.price;
    }, 0);
    setTot(totalPrice);
    console.log(tot);
}, [tot, flag]);


const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("Please Enter Amount");
    }else{
      var options = {
        key: "rzp_test_S2vBtSz2Hkhaie",
        key_secret:"LLaWYcTrsuD8K625I1EvkZVi",
        amount: amount *100,
        currency:"INR",
        name:"Foode Payment",
        description:"Pay To Foodee",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"ABC",
          email:"abc123@gmail.com",
          contact:"9111111111"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  function alert() {
    swal("Order Confirmed", "Thank you for ordering from Foodee!!", "success");
  }

  return (
    <div className="maincontainer">
        <div className="container">
          
          <div className="row">
            
          <div className="col-md-4 order-md-2 mb-4 border-b-gray-400">
            {/*cart section*/}
            <div className=' w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3'>
            <h4 className="d-flex justify-content-between align-items-center mb-3 ">
                <span className="text-cartItem">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
                {/*Cart Item*/}
                {cartItems && cartItems.length > 0 && cartItems.map((foodItem) => (
                    <div className='w-full p-0.5 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                    <img src={foodItem.img} alt='' className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>

                    {/*name section*/}
                    <div className='flex flex-col '>
                        <p className='-mb-1 text-base text-gray-50'>{foodItem.name}</p>
                        <p className='-mb-1 text-md block text-gray-300 font-semibold'><i className="fa-solid fa-indian-rupee-sign"></i>
                        {foodItem.price}</p>
                        
                    </div>
                    <div className='group flex items-center gap-2 ml-auto'>
                    <p className='-mb-1 text-base text-gray-50'>Qty: {foodItem.qty}</p>
                    </div>
                    </div>
                    
                    ))}

                     {/* Total Section */}
            <div className='w-full flex-1 bg-cartBg flex flex-col items-center
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

                    <div className='items-center justify-between'>
                    
                    <input type="text" class="flex-1 p-2 pl-0 bg-transparent border-b-2 border-gray-400 placeholder-gray-200  outline-none text-white overflow-ellipsis overflow-hidden" placeholder='Enter Payment 'value={amount} onChange={(e)=>setamount(e.target.value)} />
                    <motion.button whileTap={{scale:0.8}}
                    type='button'
                    className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                    hover:shadow-lg '
                    onClick={handleSubmit}>
                        Pay Now
                    </motion.button>
                    </div>

            </div>
            </div>

           
            </div>

           

            <div className="col-md-8 order-md-1 ">
                <br/><br/>
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" novalidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" required />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder=""  required />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label for="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select className="custom-select d-block w-100" id="country" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select className="custom-select d-block w-100" id="state" required>
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="" required />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="same-address" />
                  <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="save-info" />
                  <label className="custom-control-label" for="save-info">Save this information for next time</label>
                </div>
                <hr className="mb-4" />
                <motion.button whileTap={{scale:0.8}}
                    type='button'
                    className='w-full btn-block p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                    hover:shadow-lg ' onClick={alert}>
                        Confirm Order
                    </motion.button>
              </form>
            </div>
          </div>
         
        </div>
        <br/>
        <Footer />
      </div>
      
)
};
export default Checkout