/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY
        primaryColor1: "#0019D5",
        primaryColor2: "#E336B4",
        // BASEE
        baseColor1: "#EDF7FC",
        baseColor2: "#DCF0FA",
        baseColor3: "#84CDEE",
        baseColor4: "#50B8E7",
        // SUMMER
        summerColor1: "#FFEFA0",
        summerColor2: "#FFD57E",
        summerColor3: "#FCA652",
        summerColor4: "#AC4B1C",
        // SPRING
        springColor1: "#F9C499",
        springColor2: "#F0E59F",
        springColor3: "#AFD7A6",
        springColor4: "#75B9AD",
        // WINTER
        winterColor1: "#EEFBF9",
        winterColor2: "#BCEAE4",
        winterColor3: "#B5C7F0",
        winterColor4: "#8293E7",
        // FALL
        fallColor1: "#FFF4E3",
        fallColor2: "#FFCDAB",
        fallColor3: "#FFA45C",
        fallColor4: "#5D5D5A",
      },
      backgroundImage: {
        Hero:  "url('/assets/images/bg/Hero1-2.png')",
        Hero1: "url('/src/assets/images/bg/Hero2-2.png')",
      },
      fontFamily: {
        sans: ["Lexend Deca", "sans-serif"],
        serif: ["Aistrike", "serif"],
      },
    },
  },
  plugins: [
  ],
}
