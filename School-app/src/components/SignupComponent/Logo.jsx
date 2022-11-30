import React from 'react';
import Image from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import './MasterForm.css';

const Logo = ({ back }) => {
	// const navigate = useNavigate();

	const handleMouseEnter = (e) => {
		const el = e.currentTarget;
		el.style.color = '#0d7b4a';
	};

	const handleMouseLeave = (e) => {
		const el = e.currentTarget;
		el.style.color = '';
	};

	return (
		<div className='formLogo'>
			<div className='text-center mt-md-3'>
				<Link to='/'>
					<img
						className='mt-md-3 mt-2'
						style={{ width: '9.5rem' }}
						src={Image}
						alt='logo'
					/>
				</Link>
			</div>
			{back === true ? (
				<div>
					<div
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						className='fw-semibold mt-3 mt-lg-5 ms-3 ms-md-0'
						style={{ width: 'fit-content', cursor: 'pointer' }}
						// onClick={() => navigate(-1)}
					>
						<ArrowLeft /> <span className='ms-1'>Back</span>
					</div>
					<div className='my-4'>
						<small className='fw-semibold my-3 ms-3 ms-md-0'>
							Please fill in the information below
						</small>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Logo;
