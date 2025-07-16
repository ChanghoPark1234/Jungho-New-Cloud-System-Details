/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        'primary-dark': '#1D4ED8',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        'text-primary': '#1E293B',
        'text-secondary': '#64748B',
        background: '#F8FAFC',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
      },
      borderRadius: {
        '12': '12px',
        '16': '16px',
      },
      boxShadow: {
        'jungho': '0 4px 20px rgba(0,0,0,0.1)',
        'jungho-hover': '0 8px 30px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
      },
    },
  },
  plugins: [],
} 