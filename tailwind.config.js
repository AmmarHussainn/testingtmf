/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'calc-100-minus-50': 'calc(100% - 50px)',
        'calc-100-minus-100': 'calc(100% - 100px)',
        'calc-100-minus-500': 'calc(100% - 500px)',
      },
      height: {
        
        'calc-100-minus-450': 'calc(100vh - 450px)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(191deg, rgba(123,90,255,1) 25%, rgba(74,37,225,1) 75%);',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 6px 25px rgba(0, 0, 0, 0.08)',
      },
      borderWidth: {
        '1': '1px',
      },
      spacing: {
        '-39': '-39px',
      },
    },
  },
  plugins: [],
}