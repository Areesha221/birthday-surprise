/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE6',
        beige: '#E8DFCA',
        navy: '#1B2A4E',
        gold: '#D4AF37',
        softgold: '#F5D78E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        hand: ['"Caveat"', 'cursive'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%,100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px #D4AF37' },
          '100%': { boxShadow: '0 0 30px #D4AF37' },
        }
      }
    },
  },
  plugins: [],
}