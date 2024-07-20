/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mb: "500px",
      // => @media (min-width: 550px) { ... }

      sm: "652px",
      // => @media (min-width: 640px) { ... }

      md: "880px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      pd: "1500px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1700px",
      // => @media (min-width: 1520px) { ... }
    },
    extend: {
      colors: {
        "principal-color": "#447390",
        "second-color": "#05a1ad",
        "text-color": "#707070",
        "ligh-gray": "#DDDDDD",
        "green-light": "#a4cb6a",
      },
    },
  },
  plugins: [],
};
