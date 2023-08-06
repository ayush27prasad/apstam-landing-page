/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { fontFamily: {Ubuntu: ["Ubuntu",'sans-serif']} ,
              boxShadow:  {btnGlow : "0 0 20px 0px rgb(37 99 235 / var(--tw-bg-opacity))"}
            },
  },
  plugins: [],
};
