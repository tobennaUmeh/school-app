import { React } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../assets/logo.jpeg';

const buttonStyle = {
	letterSpacing: 1,
	padding: 1,
	outlineStyle: 'none',
	color: 'rgba(40, 182, 114, 1)',
};

const activeLink = {
	color: 'rgba(40, 182, 114, 1)',
};

const normalLink = {
	background: 'white',
	color: 'black',
};

const NavbarComponent = () => {
	const handleMouseEnter = (e) => {
		const el = e.currentTarget;
		el.style.borderBottom = '0.14rem solid rgba(40, 182, 114, 1)';
	};

	const handleMouseLeave = (e) => {
		const el = e.currentTarget;
		el.style.borderBottom = '';
	};

	const hover = () => {
		return `text-decoration-none`;
	};

	return (
		<Navbar
			bg='white'
			expand='lg'
			fixed='top'
			className='shadow bg-white fw-semibold position-absolute'
			style={{ fontSize: '14px' }}
		>
			<Container className='my-1'>
				<Link
					to='/'
					onClick={() => {
						window.scrollTo({
							left: 0,
							top: 0,
							behavior: 'smooth',
						});
					}}
				>
					<Navbar.Brand>
						<img src={Logo} style={{ width: '8.5rem' }} alt='logo' />
					</Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls='basic-navbar-nav' className='border-0' />
				<Navbar.Collapse
					id='basic-navbar-nav'
					className='justify-content-end align-items-center'
				>
					<Nav className='gap-3 align align-items-start align-items-lg-center p-3 p-lg-0 py-4 py-lg-0'>
						<NavLink
							to='/about'
							className={hover}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							onClick={() => {
								window.scrollTo({
									left: 0,
									top: 0,
									behavior: 'smooth',
								});
							}}
							style={({ isActive }) => (isActive ? activeLink : normalLink)}
						>
							About us
						</NavLink>

						<NavLink
							to='/products'
							className={hover}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							onClick={() => {
								window.scrollTo({
									left: 0,
									top: 0,
									behavior: 'smooth',
								});
							}}
							style={({ isActive }) => (isActive ? activeLink : normalLink)}
						>
							Product & Services
						</NavLink>
						<NavLink
							to='/#howItWorks'
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className='text-decoration-none text-dark p-0'
						>
							How it Works
						</NavLink>
						<NavLink
							to='/#price'
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className='text-decoration-none text-dark p-0'
						>
							Pricing
						</NavLink>
						<NavLink
							to='/Faqpage'
							className={hover}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							onClick={() => {
								window.scrollTo({
									left: 0,
									top: 0,
									behavior: 'smooth',
								});
							}}
							style={({ isActive }) => (isActive ? activeLink : normalLink)}
						>
							FAQs
						</NavLink>

						<NavLink
							smooth
							to='/#contactUs'
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className='text-decoration-none'
						>
							<Nav className='text-dark p-0'>Contact Us</Nav>
						</NavLink>

						<Link
							to='/login'
							className='text-decoration-none btn btn-sm btn-outline-none border-0 py-2 px-3 mr-3'
							style={{
								backgroundColor: 'rgba(227, 255, 242, 1)',
								color: 'rgba(40, 182, 114, 1)',
							}}
						>
							<a
								className='text-decoration-none'
								style={buttonStyle}
								href='/getStarted'
							>
								Log In
							</a>
						</Link>

						<Link
							to='/signup'
							className='text-decoration-none btn btn-sm btn-outline-none border-0 py-2 px-3 mr-3'
							style={{
								background: 'rgba(40, 182, 114, 1)',
							}}
						>
							<a
								className='text-white text-decoration-none'
								style={buttonStyle}
								href='/getStarted'
							>
								Sign Up
							</a>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
