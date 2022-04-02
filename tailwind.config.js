module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'day-blue': '#00508A',
        'night-blue': '#001F35',
        'sky-blue': '#A9DBFF',
        'light-blue': '#0094FF',
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
      },
      gridTemplateRows: {
        'auto-1fr': 'auto 1fr',
        sidebar:
          '1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr auto',
      },
      width: {
        '1px': '1px',
      },
      fontSize: {
        '24px': '24px',
      },
    },
  },
  plugins: [],
};
