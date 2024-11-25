/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', "sans-serif"],
        libre: ['"Libre Baskerville"', "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(159, 159, 159, 0.10)",
      },
    },
  },
  plugins: [],
};
