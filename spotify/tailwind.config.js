module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fluid': 'auto 1fr',
      },
      height: {
        'screen-navbar-player': 'calc(100vh - 6rem - 6rem)'
      }
    }
  },
  plugins: [],
}