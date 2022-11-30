import React from 'react';
import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import { Country, State } from 'country-state-city';

const Step2 = (props) => {
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

	if (props.currentStep !== 2) {
		return null;
	}

	return (
		<>
			<div className='mt-md-4 mt-2'>
				Please fill in the information below
			</div>
			<div className='fw-bold mt-1'>Business Information</div>
			<FormGroup>
				<FloatingLabel
					controlId='floatingInput'
					label='Business Name'
					className='mb-3'
				>
					<Form.Control
						type='text'
						name='bname'
						className='col-12 mt-4'
						required
						id='bname'
						style={style}
						placeholder='Business Name'
						value={props.bname} // Prop: The email input data
						onChange={props.handleChange} // Prop: Puts data into the state
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Business Address'
					className='mb-3'
				>
					<Form.Control
						type='text'
						name='bAdd'
						className='col-12 mt-3'
						id='bAdd'
						required
						style={style}
						placeholder='Business Address'
						value={props.bAdd} // Prop: The email input data
						onChange={props.handleChange} // Prop: Puts data into the state
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Support Email Address'
					className='mb-3'
				>
					<Form.Control
						type='email'
						name='sEmail'
						className='col-12 mt-3'
						id='sEmail'
						required
						style={style}
						placeholder='Support Email Address'
						value={props.sEmail} // Prop: The email input data
						onChange={props.handleChange} // Prop: Puts data into the state
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Support Phone Number'
					className='mb-3'
				>
					<Form.Control
						type='number'
						name='sPhNo'
						className='col-12 mt-3'
						id='sPhNo'
						required
						style={style}
						placeholder='Support Phone Number'
						value={props.sPhNo} // Prop: The email input data
						onChange={props.handleChange} // Prop: Puts data into the state
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Country'
					className='mb-3'
				>
					<Form.Select
						style={{
							background: '#F7F7F7',
							fontSize: '1rem',
						}}
						aria-label='Country Select'
						value={props.country}
						onChange={props.handleChange}
						name='country'
						required
						id='country'
					>
						{Country.getAllCountries().map((items) => (
							<option
								key={items.isoCode}
								value={items.isoCode}
							>
								{items.name}
							</option>
						))}
					</Form.Select>
				</FloatingLabel>
				<Form.Select
					style={{
						background: '#F7F7F7',
						fontSize: '1rem',
						marginTop: '1rem',
					}}
					aria-label='State Select'
					value={props.state}
					onChange={props.handleChange}
					name='state'
					required
					id='state'
				>
					<option>State</option>
					{State.getStatesOfCountry(props.country).map(
						(items) => (
							<option
								key={items.name}
								value={items.stateCode}
							>
								{items.name}
							</option>
						),
					)}
				</Form.Select>
			</FormGroup>
			<div className='text-center'>
				<div className='mt-4'>
					By signing up, you agree to Logistat
					<Link to='/' style={linkStyle}>
						{' '}
						Terms of Service
					</Link>{' '}
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

export default Step2;
