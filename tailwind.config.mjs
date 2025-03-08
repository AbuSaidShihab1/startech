/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "jost":["Jost","serif"],
        "oswald":["Oswald","sans-serif"]
      },
      colors: {
        brand_color:"#EF4A23",
        brand_color2:"#E74C3C",
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme_color1:"#081621",
        theme_color2:"#F2F4F8",
        icon_color:"#EF4A23",
        primary: "#ef4a23",
        "primary-dark":" #D51E0B",
        secondary: "#3749bb",
       tertiary: "#838383",
       bg: "#081621",
      " b-bg": "#f2f4f8",
       " m-bg":" #6E2594",
      " s-bg":" rgba(55, 73, 187, .05)",
       c1: "#666666",
        c2:" #fff",
      },
    },
  },
  plugins: [],
};
