/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPink: '#FF64AE',
        colorPurple: '#414880',
        colorGray: '#8B8B8B',
        
      },
      height: {
        100: '30rem',
        'lg': '40rem',
        'xl': '50rem',
        'xxl': '64rem'
      },
      borderRadius: {
        'xxxl': '5rem'
      }
    },
  },
  plugins: [],
}