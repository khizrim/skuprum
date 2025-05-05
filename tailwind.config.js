module.exports = {
  theme: {
    extend: {
      keyframes: {
        'metal-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'metal-in': 'metal-in 0.8s ease-out forwards',
      },
    },
  },
}
