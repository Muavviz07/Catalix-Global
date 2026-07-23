/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1A3A52',
          'navy-dark': '#112738',
          'navy-deep': '#0C1B27',
          gold: '#D4AF37',
          'gold-hover': '#E5C158',
          'gold-light': '#F8F4E6',
          'gold-border': 'rgba(212, 175, 55, 0.3)',
          cream: '#F7F5F0',
          'cream-dark': '#ECEAE3',
          text: '#2C3E50',
          'slate-light': '#E8E6E1',
          'slate-muted': '#7A8B99',
        }
      },
      fontFamily: {
        serif: ['var(--font-crimson)', 'Crimson Text', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(26, 58, 82, 0.08)',
        'premium-hover': '0 20px 40px -15px rgba(26, 58, 82, 0.15)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
};
