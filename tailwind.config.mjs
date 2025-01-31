/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

const config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {

			},
			borderRadius: {

			}
		}
	},
	plugins: [daisyui],
	daisyui: { themes: false }
};

export default config;
