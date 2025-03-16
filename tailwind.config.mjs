export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",
        phthalo: '#123524',
        myGreen: '#1e583c',
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Roboto_Slab: ["Roboto Slab", "serif"],
      },
      boxShadow: {
        'phthalo': '4px 4px 0 #123524',
        'myGreen': '4px 4px 0 #1E583C'
      },
    },
  },
  plugins: [],
};