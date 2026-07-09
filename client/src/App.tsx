import { Outlet } from 'react-router';
import './styles.css';
import { Navbar } from './Navbar.tsx';

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default App;
