/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'personal': 'linear-gradient(45deg, #d62976, #962fbf, #4f5bd5)', // Tanpa warna oranye
        'personal-hover': 'linear-gradient(45deg, #f43f5e, #d946ef, #6366f1)', // Hover effect
      },
    },
  },
  plugins: [],
};
