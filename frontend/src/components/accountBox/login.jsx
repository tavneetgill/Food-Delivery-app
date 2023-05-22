import { useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import './stylesheet.css'
import{Navbar,Nav,Container} from 'react-bootstrap'
import{LinkContainer} from 'react-router-bootstrap'
import { motion } from 'framer-motion'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [{userData}, dispatch] = useStateValue();

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
		 

		if (data.user='true') {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/homepage'
		} 
		if(data.user='false') {
			alert('Please check your username and password')
		}
		if (!data.user) {
			dispatch({
				type : actionType.SET_USER,
				userData : data
			});
			localStorage.setItem('user',JSON.stringify(data))
		}
	}

	return (
		<div className='hero'>
			<div className='form-box'>
			<div className='button-box'>
				<div id='btn'></div>
				<LinkContainer to = "/Accounts" activeClassName>
				<button type='button' className='toggle-btn'>Login</button>
				</LinkContainer>
				<LinkContainer to = "/Signup" activeClassName>
				<button type='button' className='toggle-btn'>
                    SignUp
				</button>
				</LinkContainer>
			</div>
			<form id='Login' onSubmit={loginUser} className='input-group'>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
					className='input-field'
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Enter Password"
					className='input-field'
				/>
				<br/> 
				{/*<input type='checkbox' className='check-box'/>
				<span>Remember Password</span> */}
				<br/>
				<input type="submit" value="Login" className='submit-btn' /> 
				
				
			</form>
		</div>
		</div>
	)
}

export default Login;