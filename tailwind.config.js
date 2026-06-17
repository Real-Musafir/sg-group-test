/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#11142d',        // headings / dark navy text
        body: '#6b6e7e',       // paragraph gray
        royal: '#1e3e85',      // eyebrows, pill text, links
        brand: '#4ba6d6',      // bright cyan accent
        'brand-dark': '#285499',
        pill: '#c2eeff',       // light cyan pill background
        lav: '#ecf2ff',        // light lavender panels
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1140px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
