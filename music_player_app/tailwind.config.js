module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {
      'dezzer':{
        'primary':"#EF5466",
        'dark':'#2D2D2D',
        'light':'#FFFFFF',
        'secondary':'#4A4A4A',
        'accent':'#00C7A2',
      }
      
    },
    animation:{
      'span-slow':'spin 2s linear infinite',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

