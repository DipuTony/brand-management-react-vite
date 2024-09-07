import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../../schema/auth'; // Import your Zod schema
import { z } from 'zod';

// Type for Sign Up form values
type SignUpFormValues = z.infer<typeof signUpSchema>;

const SignUp: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormValues>({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit = (data: SignUpFormValues) => {
		console.log('Sign Up Data:', data);
	};

	return (
		<div className="max-w-md mx-auto p-8 border border-gray-300 rounded shadow">
			<h2 className="text-2xl font-bold mb-6">Sign Up</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				{/* Name */}
				<div>
					<label htmlFor="name" className="block">
						Name
					</label>
					<input
						id="name"
						type="text"
						{...register('name')}
						className="w-full border p-2 rounded"
					/>
					{errors.name && <p className="text-red-500">{errors.name.message}</p>}
				</div>

				{/* Email */}
				<div>
					<label htmlFor="email" className="block">
						Email
					</label>
					<input
						id="email"
						type="email"
						{...register('email')}
						className="w-full border p-2 rounded"
					/>
					{errors.email && (
						<p className="text-red-500">{errors.email.message}</p>
					)}
				</div>

				{/* Password */}
				<div>
					<label htmlFor="password" className="block">
						Password
					</label>
					<input
						id="password"
						type="password"
						{...register('password')}
						className="w-full border p-2 rounded"
					/>
					{errors.password && (
						<p className="text-red-500">{errors.password.message}</p>
					)}
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className="w-full bg-green-500 text-white p-2 rounded"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;
