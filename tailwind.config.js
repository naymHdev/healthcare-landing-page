/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        appointment: "url('/public/Rectangle 32.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
