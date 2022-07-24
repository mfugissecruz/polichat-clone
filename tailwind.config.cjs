/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'chat-image': "url('./src/assets/bg-chat.png')",
    },
    extend: {},
  },
  plugins: [],
}