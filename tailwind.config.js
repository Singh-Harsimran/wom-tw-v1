/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {
      colors:{
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        white: 'rgb(255 255 255 / <alpha-value>)',
        black:'rgb(0 0 0 / <alpha-value>)',
        notification:'var(--color-notification)'
      },
      fontSize: {
        xxs : ['.60rem', '.75rem']
      }
    },
  },
  plugins: [],
}
