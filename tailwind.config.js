/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './renderer/src/**/*.svelte'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	corePlugins: {
		preflight: false,
	},
  	daisyui: {
		themes: [{
			mytheme: {
				"primary": "#374151",
				"secondary": "#D926A9",
				"accent": "#1FB2A6",
				"neutral": "#191D24",
				"base-100": "#272b2e",
				"info": "#3ABFF8",
				"success": "#36D399",
				"warning": "#FBBD23",
				"error": "#F87272",
			},
		}],
  	},
};
