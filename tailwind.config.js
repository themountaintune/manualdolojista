/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [	"./src/**/*.{ts,tsx}",	"./app/**/*.{ts,tsx}" ],
	theme: {
		extend: {
			colors: {
				bg:    '#0B0F1A',
				panel: '#0F1626',
				line:  '#1E293B',
				ink:   '#E5E7EB',
				sub:   '#94A3B8',
				brand: { teal: '#06B6D4', green: '#16A34A', yellow: '#FACC15' }
			},
			borderRadius: { xl: '20px', '2xl': '24px' },
			boxShadow: { card: '0 2px 12px rgba(0,0,0,.35)', hover: '0 8px 28px rgba(0,0,0,.45)' },
			typography: ({ theme }) => ({
				dark: {
					css: {
						'--tw-prose-body': theme('colors.ink'),
						'--tw-prose-headings': '#FFF',
						'--tw-prose-links': theme('colors.brand.teal'),
						'--tw-prose-quotes': theme('colors.ink'),
						'--tw-prose-hr': theme('colors.line'),
						'--tw-prose-bold': '#FFF',
						color: theme('colors.ink'),
						a: { textDecoration: 'underline' },
						code: { color: '#E2E8F0' },
						pre:  { backgroundColor: '#0A0F1A', borderRadius: '14px', border: `1px solid ${theme('colors.line')}` }
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

