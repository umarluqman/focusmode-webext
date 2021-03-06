/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
  },
  variants: { fill: ['hover', 'focus'], extend: { typography: ['dark'] } },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
