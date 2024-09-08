import React from 'react';
import Navbar from '../../components/molecoules/Navbar';
import Sidebar from '../../components/molecoules/Sidebar';
import Calendar from '../../components/molecoules/Calendar';
const Home: React.FC = () => {
	return (
		<div className="w-full h-full">
			<Navbar></Navbar>
			<Sidebar children={<Calendar />}></Sidebar>
		</div>
	);
};

export default Home;
