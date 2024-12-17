/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        melon: 'var(--melon)',
        'pale-dogwood': 'var(--pale-dogwood)',
        'misty-rose': 'var(--misty-rose)',
        seashell: 'var(--seashell)',
        platinum: 'var(--platinum)',
        'platinum-2': 'var(--platinum-2)',
        linen: 'var(--linen)',
        'champagne-pink': 'var(--champagne-pink)',
        apricot: 'var(--apricot)',
        peach: 'var(--peach)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'accent-dark': 'var(--accent-dark)',
        'accent-light': 'var(--accent-light)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};