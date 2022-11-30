import { React, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logoImage from '../../assets/logo.jpeg';
import './Login.css';

const Login = () => {
	const [inputtext, setinputtext] = useState({
		email: '',
		password: '',
	});

	const [warnemail, setwarnemail] = useState(false);
	const [warnpassword, setwarnpassword] = useState(false);

	const [eye, setEye] = useState(true);
	const [password, setpassword] = useState('password');
	const [type, settype] = useState(false);

	const inputEvent = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setinputtext((lastValue) => {
			return {
				...lastValue,
				[name]: value,
			};
		});
	};

	const submitForm = (e) => {
		e.preventDefault();
		setwarnemail(false);
		setwarnpassword(false);
		if (inputtext.email === '') {
			setwarnemail(true);
		} else if (inputtext.password === '') {
			setwarnpassword(true);
		} else {
			alert('form submitted');
		}
	};

	const handleEyeClick = () => {
		if (password === 'password') {
			setpassword('text');
			setEye(false);
			settype(true);
		} else {
			setpassword('password');
			setEye(true);
			settype(false);
		}
	};

	// const style = { maxWeigth: "10rem" };
	return (
		<div className='Login-container'>
			<div className='Login-card'>
				<div className='text-center my-3'>
					<a href='/'>
						<img src={logoImage} alt='' />
					</a>
					{/* <Logo className="d-block" /> */}
				</div>

				<div className='text mt-5'>
					<h3>Welcome</h3>
				</div>
				<form onSubmit={submitForm}>
					<div className='input-text'>
						<input
							type='text'
							className={` ${warnemail ? 'warning' : ''}`}
							placeholder='Enter your email'
							value={inputtext.email}
							onChange={inputEvent}
							name='email'
						/>
						<i className='fa fa-envelope'></i>
					</div>
					<div className='input-text password'>
						<input
							type={password}
							className={` ${warnpassword ? 'warning' : ''} ${
								type ? 'type_password' : ''
							}`}
							placeholder='Enter your password'
							value={inputtext.password}
							onChange={inputEvent}
							name='password'
						/>
						<div className='forgot'>
							<p className='text-end w-100'>
								<a
									href='/forgotPass'
									style={{
										color: '#28B672',
										fontSize: '1rem',
										fontWeight: 'semibold',
									}}
								>
									Forgot Password?
								</a>
							</p>
						</div>

						<p className='text-start w-100'>
							<label htmlFor='' className='d-flex align-items-center fs-6'>
								<input
									type='checkbox'
									name=''
									id=''
									className='me-2'
									style={{
										width: '20px',
										accentColor: '#28b672',
										color: 'white',
									}}
								/>
								Keep me signed in
							</label>
						</p>
						<div onClick={handleEyeClick} className='fa-eye'>
							{eye ? <FaEye /> : <FaEyeSlash />}
						</div>
					</div>
					<div className='buttons'>
						<button type='submit'>Login</button>
					</div>
					<div className='forgot'>
						<p className='text-center w-100 fs-6'>
							Don't have an account ?{' '}
							<a
								href='/signUp'
								style={{
									color: '#28b672',
								}}
							>
								Sign up
							</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
