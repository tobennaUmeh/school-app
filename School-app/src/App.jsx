import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './pages/CreatePage/Create';
import ViewPage from './pages/ViewPage/ViewPage';
import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/loginPage/Login';
import Signup from './pages/SignupPage/SignUp';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/create' element={<Create />} />
					<Route path='/view' element={<ViewPage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
