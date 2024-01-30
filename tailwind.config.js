/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      disabledText: '#BABABA',
      disabledBackground: '#E0E0E0',
      primary: {
        P100: '#f3f7fb',
        P200: '#e4ebf5',
        P300: '#cfddee',
        P400: '#b4cbe4',
        P500: '#87aad3',
        primary: '#6b8fc6',
        P600: '#5877b8',
        P700: '#4d66a8',
        P800: '#43558a',
        P900: '#3a476e',
      },
    },
    screens: {
      // tablet: "640px",
      // laptop: "1024px",
      // desktop: "1280px",
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semi_bold: '600',
    },
    fontSize: {},
    fontFamily: 'Montserrat',
  },
  plugins: [],
};
