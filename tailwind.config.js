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
        auto: 'auto',
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto',
        'auto-auto': 'auto auto',
        'auto-3x': 'repeat(3, auto)',
        sidebar:
          '1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr auto',
      },
      gridTemplateRows: {
        auto: 'auto',
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto',
        sidebar:
          '1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr auto',
      },
      width: {
        '1px': '1px',
      },
      height: {
        '1px': '1px',
      },
      fontSize: {
        '24px': '24px',
        '48px': '48px',
        '64px': '64px',
      },
      keyframes: {
        'cube-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'cube-spin2': {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(450deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'cube-spin': 'cube-spin 10s linear infinite',
        'cube-spin2': 'cube-spin2 15s linear infinite',
      },
    },
  },
  plugins: [],
};
