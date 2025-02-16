/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
          quicksand: ["Quicksand", "sans-serif"],
          caveat: ["Caveat", "cursive"],  // ✅ Ahora puedes usar font-caveat en Tailwind
        },
      },
    },
    plugins: [],
  };
  