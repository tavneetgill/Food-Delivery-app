import './checkout.css';
import React,{useState} from 'react';

function Checkout() {
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
  return (
    <div className="Checkout">
     <h2>Rnpm stazorpay Payment To FOODEE</h2>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>PAY NOW</button>
    </div>
  );
}

export default Checkout;
