/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#121212',
          elevate: '#1A1A1A', 
          card: '#202020'
        },
        primary: {
          DEFAULT: '#1DB954',
          50: '#E3F8EA',
          100: '#C7F2D5',
          200: '#94E6AC',
          300: '#62DA83',
          400: '#2FCF5A',
          500: '#1DB954',
          600: '#189443',
          700: '#126F32',
          800: '#0C4A22',
          900: '#062511'
        },
        secondary: {
          DEFAULT: '#6C7BD8',
          50: '#F2F3FB',
          100: '#E5E8F7',
          200: '#CBD0EF',
          300: '#B0B9E6',
          400: '#8E9ADF',
          500: '#6C7BD8',
          600: '#455ACC',
          700: '#2D42B0',
          800: '#23348A',
          900: '#182564'
        },
        accent: {
          DEFAULT: '#F15BB5',
          50: '#FDE8F4',
          100: '#FBD0E9',
          200: '#F8A2D4',
          300: '#F47DC4',
          400: '#F15BB5',
          500: '#ED299A',
          600: '#CA137B',
          700: '#960F5C',
          800: '#630A3D',
          900: '#31051E'
        },
        success: {
          DEFAULT: '#00C851',
          lighter: '#CCF1D6',
        },
        warning: {
          DEFAULT: '#FFBB33', 
          lighter: '#FFF0CC',
        },
        error: {
          DEFAULT: '#FF4444',
          lighter: '#FFDBDB',
        },
        neutral: {
          DEFAULT: '#B3B3B3',
          50: '#F7F7F7',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A'
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.2s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};