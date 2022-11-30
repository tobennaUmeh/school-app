import React from 'react';
import { FormGroup, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';

const Step3 = (props) => {
	// console.log(State.getAllStates());
	// console.log(Country.getAllCountries().map((items) => (items.isoCode)));

	const style = {
		border: 'none',
		background: '#F7F7F7',
		// padding: '0.5rem 1rem',
		// fontSize: '0.8rem',
	};

	const linkStyle = {
		textDecoration: 'none',
		color: '#28B672',
	};

	if (props.currentStep !== 3) {
		return null;
	}

	return (
		<>
			<div className='mt-md-4 mt-2'>
				Please fill in the information below
			</div>
			<div className='fw-bold mt-1'>
				Account Information (Optional)
			</div>
			<FormGroup>
				<FloatingLabel
					controlId='floatingInput'
					label='Bank Name (Optional)'
					className='mb-3'
				>
					<Form.Control
						type='text'
						name='bAccname'
						className='col-12 mt-4'
						required
						id='bAccname'
						style={style}
						placeholder='Bank Name(Optional)'
						value={props.bAccname} // Prop: The email input data
						onChange={props.handleChange} // Prop: Puts data into the state
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Account Number (Optional)'
					className='mb-3'
				>
					<Form.Control
						type='number'
						name='bAccNo'
						className='col-12 mt-3'
						id=''
						required
						style={style}
						placeholder='Account Number (Optional)'
						value={props.bAccNo} // Prop: The email input data
						onChange={props.handleChange} // Prop: Puts data into the state
					/>
				</FloatingLabel>
			</FormGroup>
			<div className='text-center'>
				<div className='mt-4'>
					By signing up, you agree to Logistat
					<Link to='/' style={linkStyle}>
						{' '}
						Terms of Service
					</Link>
					<br /> and
					<Link to='/' style={linkStyle}>
						{' '}
						Privacy Policy
					</Link>
				</div>
			</div>
		</>
	);
};

export default Step3;
