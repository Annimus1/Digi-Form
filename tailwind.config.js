/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		],
	theme: {
		extend: {
			colors:{
				'william': {
					'50': '#f3f8f8',
					'100': '#e0eded',
					'200': '#c4dddd',
					'300': '#9ac5c6',
					'400': '#6aa3a6',
					'500': '#4f888b',
					'600': '#416c71',
					'700': '#3c5d62',
					'800': '#374f53',
					'900': '#314448',
					'950': '#1d2c2f',
				},
								
			},
			backgroundImage:{
				'error-image': "url('https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
			}
		},
	},
	plugins: [],
}
