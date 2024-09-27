/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*{.js}",
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        'subheading': ['1.5rem', { lineHeight: '2rem', fontWeight: '500' }],
      },
      
    }
  }
}