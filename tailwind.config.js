/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // if you’re using the /app router
    "./pages/**/*.{js,ts,jsx,tsx}",      // if you’re using the /pages router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",         // if you’re using the /src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        // you probably already have these:
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        serif: ['var(--font-pt-serif)', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
