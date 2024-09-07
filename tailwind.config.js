/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'custom-gradient':
					'linear-gradient(200.98deg, #00BDD5 30.5%, rgba(255, 255, 255, 0) 86.14%)',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
			fontWeight: {
				regular: '400',
				medium: '500',
				bold: '700',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
};
