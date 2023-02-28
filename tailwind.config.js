module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Montserrat',
      secondary: 'Lora',
      tertiary: 'Hind Madurai',
      addis:'Addis',
      dire:'Dire'
//       font-family: 'Candal', sans-serif;
// font-family: 'Changa', sans-serif;
// font-family: 'Overpass', sans-serif;
      // Rajdhani,Aldrich,Orbitron
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about/about.jpg')",
        services: "url('./assets/services/services.png')",
      },
    },
  },
  plugins: [],
};
