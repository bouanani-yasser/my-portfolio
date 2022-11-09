/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   darkMode: ['class', '[data-theme="dark"]'],
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
   daisyui: {
      themes: [
         {
            light: {
               ...require('daisyui/src/colors/themes')['[data-theme=light]'],
               primary: '#5E565A',
               secondary: '#BA5D23',
               accent: '#FFC107',
               neutral: '#FFC107',
            },
         },
         {
            dark: {
               ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
               primary: '#5E565A',
               secondary: '#BA5D23',
               accent: '#FFC107',
               neutral: '#FFC107',
               'base-100': '#ffffff',
               'primary-focus': '#5E565A',
               '--rounded-box': '0rem',
               '--rounded-btn': '0rem',
            },
         },
         'cupcake',
         'bumblebee',
         'emerald',
         'corporate',
         'synthwave',
         'retro',
         'cyberpunk',
         'valentine',
         'halloween',
         'garden',
         {
            forest: {
               ...require('daisyui/src/colors/themes')['[data-theme=forest]'],
               secondary: '#066048',
               'primary-focus': '#064E3C',
            },
         },
         'aqua',
         'lofi',
         'pastel',
         'fantasy',
         'wireframe',
         'black',
         'luxury',
         'dracula',
         'cmyk',
         'autumn',
         'business',
         'acid',
         'lemonade',
         'night',
         'coffee',
         'winter',
      ],
   },
   plugins: [require('daisyui')],
};
