import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUP';
import ResetPassword from '../pages/Reset';
import Home from '../pages/Home';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="auth" element={<Navigate to="/auth/sign-in" replace />} />
			<Route path="auth/sign-in" element={<SignIn />} />
			<Route path="auth/sign-up" element={<SignUp />} />
			<Route path="auth/reset-password" element={<ResetPassword />} />
		</Routes>
	);
};

export default AppRoutes;
