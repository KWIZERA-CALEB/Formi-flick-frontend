const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      
      md: '768px',
    
      lg: '1024px',
      
      xl: '1280px',
    },
    colors: {
      'mainBg': '#1c1917', //main dark
      'accentBg': '#23211f', //medium black
      'othersBg': '#03a9f4', //blue
      'textMain': '#fff', //main white
      'textLess': '#f9f9f9' //less white
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
});
