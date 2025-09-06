import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores base con fallbacks
        primary: '#FFF4E6',
        secondary: '#FFE4B5',
        accent: '#F4A460',
        brown: '#CD853F',
        'dark-brown': '#8B4513',
        
        // Paletas completas para cada tema
        caramelo: {
          50: '#FFF4E6',
          100: '#FFE4B5',
          200: '#F4A460',
          300: '#CD853F',
          400: '#8B4513',
        },
        moca: {
          50: '#F5F2E8',
          100: '#E6D7C3',
          200: '#D2B48C',
          300: '#A0522D',
          400: '#654321',
        },
        canela: {
          50: '#FFFAF0',
          100: '#F5DEB3',
          200: '#DEB887',
          300: '#BC8F8F',
          400: '#A0522D',
        },
        trufa: {
          50: '#FDF5E6',
          100: '#FAEBD7',
          200: '#DDBEA9',
          300: '#B08D57',
          400: '#8B7355',
        },
        miel: {
          50: '#FFF8DC',
          100: '#F0E68C',
          200: '#DAA520',
          300: '#B8860B',
          400: '#8B6914',
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
} satisfies Config;