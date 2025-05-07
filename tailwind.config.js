/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseRing1: {
          '0%, 100%': { backgroundColor: '#ede9fe' }, // light purple
          '50%': { backgroundColor: '#c4b5fd' }, // darker
        },
        pulseRing2: {
          '0%, 100%': { backgroundColor: '#ddd6fe' },
          '50%': { backgroundColor: '#a78bfa' },
        },
        pulseRing3: {
          '0%, 100%': { backgroundColor: '#c4b5fd' },
          '50%': { backgroundColor: '#8b5cf6' },
        },
      },
      animation: {
        pulseRing1: 'pulseRing1 6s ease-in-out infinite',
        pulseRing2: 'pulseRing2 6s ease-in-out infinite',
        pulseRing3: 'pulseRing3 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

