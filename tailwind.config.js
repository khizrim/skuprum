module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e60023', // насыщенный красный
        secondary: '#0057ff', // яркий синий
        background: '#ffffff', // белый фон
        accent: '#ff3366', // дополнительный акцентный красный
        muted: '#f0f4f8', // светло-серый для фонов/разделителей
        dark: '#0a0a0a', // для темного текста
      },
      fontSize: {
        'hero': '4rem',       // 64px
        'display': '3rem',    // 48px
        'headline': '2.25rem',// 36px
        'lead': '1.5rem',     // 24px
        'base': '1.125rem',   // 18px
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        'section': '6rem',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '2rem',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
