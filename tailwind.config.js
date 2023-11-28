/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		darkMode: 'class',
		screens: {
			xs: '25rem', // 400px
			sm: '36rem', // 576px
			md: '48rem', // 768px
			lg: '64rem', // 1024px
			xl: '80rem', // 1280px
		},
		extend: {
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
				RobotoSlab: ['"Roboto Slab"', 'serif'],
				RobotoMono: ['"Roboto Mono"', 'monospace'],
			},
			fontSize: {
				titleClamp: 'clamp(1.875rem, 0.652rem + 4.891vw, 3rem)',
				subtitleClamp: 'clamp(0.8rem, 0.311rem + 1.957vw, 1.25rem)',
			},
		},
	},
	plugins: [],
}
