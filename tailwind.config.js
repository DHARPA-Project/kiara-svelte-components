/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: 'red',
							'&:hover': {
								color: 'pink'
							}
						}
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
