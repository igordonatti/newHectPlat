import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple': {
          '50': '#f0fdf1',
          '100': '#dcfcdf',
          '200': '#bbf7c1',
          '300': '#86ef92',
          '400': '#4ade5b',
          '500': '#22c535',
          '600': '#159e25',
          '700': '#158022',
          '800': '#166520',
          '900': '#14531d',
          '950': '#052e0c',
        },
      }
    },
  },
  plugins: [],
};
export default config;
