/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        left: {
          "0%": { marginLeft: "120%" },
          "100%": { marginLeft: "0%" },
        },
        right: {
          "0%": { marginLeft: "0%" },
          "100%": { marginLeft: "120%" },
        },
      },
      animation: {
        right: "right 0.4s forwards",
        left: "left 0.4s forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "port-bg-big": "url('public/assets/images/bg-image-big.jpg')",
        "port-bg-black": "url('public/assets/images/bg-black.jpg')",
        "port-bg-code": "url('public/assets/images/bg-code.jpg')",
        "port-bg-dark1": "url('public/assets/images/bg-dark-1.jpg')",
        "port-bg-dark2": "url('public/assets/images/bg-dark-2.jpg')",
        "port-bg-dark3": "url('public/assets/images/bg-dark-3.jpg')",
      },
      fontFamily: {
        jost: "Jost",
        inter: "Inter",
        poppins: "Poppins",
        montserrat: "Montserrat",
        nunito: "Nunito",
      },
      colors: {
        port: {
          page: "#041E42",
          red: "#C04000",
          green: "#00BA88",
          orange: "#FF8800",
          black: "#000000",
          "blue-black": "#11142D",
          yellow: "#FFD726",
          "dark-blue": "#0049C6",
          blue: "#1da1f2",
          "sky-blue": "#3F8CFF",
          "light-blue": "rgba(0, 255, 255, 9)",
          gray: "#787878",
          "light-gray": "#F7F7F7",
          "background-light": "#E4E4E4",
          white: "#FFFFFF",
          "off-white": "#E5E5E5",
          "faint-gray": "#F0F3F6",
          "background-mid": "rgba(248, 246, 243, 1)",
          "sec-black": "#111418",
          danger: "#FF0000",
        },
        text: {
          100: "#676A79",
          200: "rgba(41, 41, 46, 1)",
          300: "#14191E",
          400: "#29292E",
        },
      },
      aspectRatio: {
        chart: "1 / 0.4",
        standard: "4 / 3",
        45: "4 / 5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
