import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './stylesheet.css'
import{LinkContainer} from 'react-router-bootstrap'


function Register() {
	const Navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			Navigate('/login')
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
				<button type='button' className='toggle-btn'>SignUp</button>
				</LinkContainer>
			</div>
			{/*<div className='social-icons'>
				<img src='./fb.png'/>
				<img src='./gp.png'/>
				<img src='./ tw.png'/>
	</div>*/}
			<form id='signup' onSubmit={registerUser}  className='input-group'>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
					className='input-field'
				/>
				<br />
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
					placeholder="Password"
					className='input-field'
				/>
				<br />
				<input type="submit" value="Register" className='submit-btn'/>
			</form>
		</div>
		</div>
	)
}

export default Register;