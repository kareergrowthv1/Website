/** Tailwind v4 — loaded via @config from CSS */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#0066ff',
        accent: '#22c55e',
        dark: '#0f172a',
        light: '#f8fafc',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
