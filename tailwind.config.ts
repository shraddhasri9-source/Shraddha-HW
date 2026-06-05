import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0B2AC0', deep: '#082A8C', soft: '#1640E8' },
        gold: { DEFAULT: '#E0A407', light: '#FCBB19', pale: '#FDF1D2' },
        cream: '#FBF8F0',
        paper: '#FEFCF7',
        rule: '#C7D2EC',
        teal: { DEFAULT: '#0B2AC0', pale: '#DEE7FA' },
        muted: '#5A6B8F',
        faint: '#9AA6C8',
      },
      fontFamily: {
        serif: ['Poppins', 'Inter', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      borderRadius: { '2xl': '20px' },
      boxShadow: {
        card: '0 20px 44px rgba(11,42,192,0.12)',
        soft: '0 8px 28px rgba(11,42,192,0.10)',
      },
    },
  },
  plugins: [],
}

export default config
