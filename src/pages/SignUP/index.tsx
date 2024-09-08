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

	const handleGoogleSignIn = () => {
		console.log('Google Sign In');
	};

	return (
		<div className=" mx-auto  border border-gray-300  shadow-gray-50 w-[90%] md:w-[80%] grid  md:grid-cols-2 my-auto min-h-[80vh] rounded-md lg:w-[70%]">
			<div className="bg-custom-gradient bg-cover bg-center  justify-center px-8 items-center hidden md:flex">
				<div className="max-w-[70%]">
					{' '}
					<p className="text-white font-[500] text-center font-roboto text-3xl leading-relaxed">
						Manage your Brand content smartly
					</p>
					<p className="text-sm text-center my-4 font-roboto text-gray-500">
						Real Time Social Media manager tools for Early stage founders and
						Micro businesses
					</p>
				</div>
			</div>
			<div className="md:px-8 flex flex-col justify-center items-center bg-custom-gradient md:bg-none px-4 py-2">
				<h2 className="text-2xl font-semibold text-center">Sass Tool</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4 w-full md:w-[80%] flex flex-col gap-3"
				>
					{/* Email */}
					<div className="flex justify-center flex-col gap-2">
						<label
							htmlFor="name"
							className="block font-roboto font-[400] text-[1rem] text-[#4D5959]"
						>
							Name
						</label>
						<input
							id="name"
							type="text"
							placeholder="Anukul Raj"
							{...register('name')}
							className="w-full border p-2 rounded-md bg-[#EFF0F2]  px-4 outline-none placeholder:text-gray-600 text-[#838383] text-[.925rem]"
						/>
						{errors.name && (
							<p className="text-red-500">{errors.name.message}</p>
						)}
					</div>
					<div className="flex justify-center flex-col gap-2">
						<label
							htmlFor="email"
							className="block font-roboto font-[400] text-[1rem] text-[#4D5959]"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="Example@gmail.com"
							{...register('email')}
							className="w-full border p-2 rounded-md bg-[#EFF0F2]  px-4 outline-none placeholder:text-gray-600 text-[#838383] text-[.925rem]"
						/>
						{errors.email && (
							<p className="text-red-500">{errors.email.message}</p>
						)}
					</div>

					{/* Password */}
					<div className="flex justify-center flex-col gap-2">
						<label
							htmlFor="password"
							className="block font-roboto font-[400] text-[1rem] text-[#4D5959]"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							{...register('password')}
							className="w-full border p-2 rounded-md bg-[#EFF0F2]  px-4 outline-none placeholder:text-gray-600 text-[#838383] text-[.925rem]"
						/>
						{errors.password && (
							<p className="text-red-500">{errors.password.message}</p>
						)}
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="mx-auto bg-[#007074] text-white p-2 shadow-sm text-[1rem] rounded-md  w-[70%] font-inter "
					>
						Sign Up
					</button>
				</form>
				<p className="text-gray-400 text-xl my-4 font-[400] font-roboto">Or</p>
				{/* Google Sign In */}

				<button
					onClick={handleGoogleSignIn}
					className="w-[80%] bg-white text-[#043133] p-3 font-inter rounded border  border-[#f2f2f2] shadow-sm shadow-gray-400 flex items-center justify-center gap-2"
				>
					<img
						src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
						alt="Google"
						className="w-10"
					/>
					<span> Sign In with Google</span>
				</button>
			</div>
		</div>
	);
};

export default SignUp;
