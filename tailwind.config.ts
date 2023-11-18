import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navText: '#FFF',
      },
      backgroundColor: {
        primaryBg: '#FDF5E6',
        navColor: '#D2B48C',
      },
      boxShadow: {
        divider: 'inset 0 -1px 0 0 #333',
      },
    },
  },
  plugins: [],
};
export default config;
