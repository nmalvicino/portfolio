/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        surface: {
          DEFAULT: '#434242',
          development: '#5DA07B',
          graphic: '#8B5DA0',
          web: '#5D5EA0',
          branding: '#689BAC',
          uxui: '#C46969',
          alt: '#D5D5D5',
          opacity: 'rgba(255, 255, 255, 0.1)',
        },

        // Text
        ink: {
          DEFAULT: '#232121',
          alt: '#EEEEEE',
        },

        // Borders
        line: {
          DEFAULT: '#434242',
          alt: '#D5D5D5',
        },
      },
      fontFamily: {
        epilogue: ['Epilogue Variable', 'sans-serif'],
        sora: ['Sora Variable', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
