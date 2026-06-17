/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071828',
        'navy-light': '#0c2340',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-up-d1': 'fadeInUp 0.7s ease-out 0.15s forwards',
        'fade-in-up-d2': 'fadeInUp 0.7s ease-out 0.3s forwards',
        'fade-in-right': 'fadeInRight 0.7s ease-out 0.2s forwards',
        'fade-in-left': 'fadeInLeft 0.7s ease-out 0.2s forwards',
      },
    },
  },
  plugins: [],
}
