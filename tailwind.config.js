export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 500: '#0F4C81', 600: '#0a38b8' },
        secondary: { 500: '#2563EB', 600: '#1d4ed8' },
        teal: { 500: '#14B8A6', 600: '#0d9488' },
        success: '#10B981'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
