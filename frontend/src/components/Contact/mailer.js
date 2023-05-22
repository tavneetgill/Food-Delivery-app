import {init} from 'emailjs-com';
import emailjs from 'emailjs-com';
const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendFrom('service_x4tcjil','template_jp4dnt5',e.target,'WDtzObGTL9rF7jHoo'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className="container border"
        style={{marginTop:"25px",
            width:"50%",
            marginLeft:"400px",
            backgroundColor:"orange",
        }}>
            <h1 className='absolute-center'style={{marginTop:"20px",}}>Contact Us</h1>
            <h6 className='absolute-center'style={{marginTop:"23px",}}>Phone: +91 9876543210</h6>  
            <h6 className='absolute-center'style={{marginTop:"23px",}}>Address: The Foodee Building, New Delhi, India</h6>
            <form className="row" style={{ margin:"25px 85px 75px 100px"
            }}>
                <label>Name</label>
                <input type="text" name="Name" className="form-control"/>

                <label>Email</label>
                <input type="email" name="user_email" className="form-control"/>

                <label>Message</label>
                <textarea name='message' rows='4' className="form-control"/>
                <input type='submit' value='Send' className="form-control btn btn-primary"
                style={{marginTop:"30px" }}
                />
            </form>
        </div>
    )
}
export default Mailer