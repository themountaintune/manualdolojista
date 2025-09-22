/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [	"./src/**/*.{ts,tsx}",	"./app/**/*.{ts,tsx}" ],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
			},
			colors: {
				bg: '#EAEAEA',
				panel: '#FFFFFF',
				line: 'rgba(51, 51, 51, 0.40)',
				ink: '#333333',
				sub: 'rgba(51, 51, 51, 0.80)',
				accent: '#B76E79',
				cta: '#FFB6C1',
				brand: { 
					primary: '#B76E79', 
					secondary: '#FFB6C1',
					text: '#333333',
					muted: 'rgba(51, 51, 51, 0.60)'
				}
			},
			borderRadius: { 
				sm: '2px',
				md: '4px',
				lg: '8px'
			},
			boxShadow: { 
				card: '0 0 0 1px rgba(51, 51, 51, 0.40)', 
				hover: '0 0 0 1px rgba(51, 51, 51, 0.60)' 
			},
			typography: ({ theme }) => ({
				light: {
					css: {
						'--tw-prose-body': theme('colors.ink'),
						'--tw-prose-headings': theme('colors.ink'),
						'--tw-prose-links': theme('colors.accent'),
						'--tw-prose-quotes': theme('colors.ink'),
						'--tw-prose-hr': theme('colors.line'),
						'--tw-prose-bold': theme('colors.ink'),
						color: theme('colors.ink'),
						a: { textDecoration: 'underline' },
						code: { color: theme('colors.ink') },
						pre:  { backgroundColor: theme('colors.panel'), borderRadius: '4px', border: `1px solid ${theme('colors.line')}` }
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

