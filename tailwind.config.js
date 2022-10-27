/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
        "./utils/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				html: { fontSize: "18px" },
			});
		}),
        require('@tailwindcss/forms'),
	],
};
