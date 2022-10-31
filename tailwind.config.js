/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   darkMode: 'class',
   theme: {
      extend: {
         keyframes: {
            text: {
               '0%': { backgroundPosition: '0 50%' },
               '50%': { backgroundPosition: '100% 50%' },
               '50%': { backgroundPosition: '0 50%' },
            },
         },
         animation: {
            animatedText: 'text 10s ease-in-out infinite',
         },
      },
   },
   plugins: [],
};
