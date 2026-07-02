/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#fff7ff',
        muted: '#cfc0df',
        paper: '#13071f',
        line: '#3b1858',
        accent: '#8b5cf6',
        coral: '#f7b2ff',
        gold: '#d8b4fe',
        skysoft: '#241032',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(86, 31, 146, 0.28)',
      },
      fontFamily: {
        sans: ['Trebuchet MS', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
