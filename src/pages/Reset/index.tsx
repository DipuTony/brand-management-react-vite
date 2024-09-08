import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPassword } from '../../schema/auth'; // Import your Zod schema
import { z } from 'zod';

// Type for Sign Up form values
type ResetPasswordFormValues = z.infer<typeof resetPassword>;

const SignUp: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ResetPasswordFormValues>({
		resolver: zodResolver(resetPassword),
	});

	const onSubmit = (data: ResetPasswordFormValues) => {
		console.log('Reset Password:', data);
	};

	return (
		<div className=" mx-auto  border border-gray-300  shadow-gray-50 w-[90%] md:w-[80%] grid  md:grid-cols-2 min-h-[80vh] rounded-md lg:w-[70%]">
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
				<h2 className="text-2xl font-semibold text-center">Reset Password</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4 w-full md:w-[80%] flex flex-col gap-3"
				>
					{/* Password */}
					<div className="flex justify-center flex-col gap-2">
						<label
							htmlFor="password"
							className="block font-roboto font-[400] text-[1rem] text-[#4D5959]"
						>
							Old Password
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

					<div className="flex justify-center flex-col gap-2">
						<label
							htmlFor="newPassword"
							className="block font-roboto font-[400] text-[1rem] text-[#4D5959]"
						>
							New Password
						</label>
						<input
							id="newPassword"
							type="newPassword"
							{...register('newPassword')}
							className="w-full border p-2 rounded-md bg-[#EFF0F2]  px-4 outline-none placeholder:text-gray-600 text-[#838383] text-[.925rem]"
						/>
						{errors.newPassword && (
							<p className="text-red-500">{errors.newPassword.message}</p>
						)}
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="mx-auto bg-[#007074] text-white p-2 shadow-sm text-[1rem] rounded-md  w-[70%] font-inter "
					>
						Reset Password
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
