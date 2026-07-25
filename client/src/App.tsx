import { Outlet, useNavigation } from 'react-router';
import './styles.css';
import { Navbar } from './Navbar.tsx';

function App() {
	const { state } = useNavigation();
	const isLoading = state === 'loading';
	return (
		<>
			<Navbar />
			{isLoading && <div className='loading-spinner' />}
			<div className={`container${isLoading ? ' loading' : ''}`}>
				<Outlet />
			</div>
		</>
	);
}

export default App;
