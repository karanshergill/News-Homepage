/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        'color-soft-orange': 'hsl(35, 77%, 62%)',
        'color-soft-red': 'hsl(5, 85%, 63%)',
        'color-off-white': 'hsl(36, 100%, 99%)',
        'color-grayish-blue': 'hsl(233, 8%, 79%)',
        'color-dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'color-very-dark-blue': 'hsl(240, 100%, 5%)'
      },
      fontFamily: {
        'Inter': ['Inter']
      },
      fontSize: {
        default: ['14px']
      }
    },
  },
  plugins: [],
}

