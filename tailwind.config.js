/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0a1a3c',
        'navy-light': '#1a2a4c',
        'navy-dark': '#051226',
        'steel-gray': '#7a7f87',
        'steel-light': '#9ca3af',
        'steel-dark': '#6b7280',
        'orange': '#ff6a00',
        'orange-400': '#fb923c',
        'orange-500': '#f97316',
        'orange-600': '#ea580c',
        'orange-700': '#c2410c',
        'orange-glow': 'rgba(255, 106, 0, 0.2)',
        'white': '#ffffff',
        'white-soft': '#fafafa',
        'blue-400': '#60a5fa',
        'blue-600': '#2563eb',
        'blue-800': '#1e40af',
        'green-600': '#16a34a',
        'green-800': '#166534',
        'purple-600': '#9333ea',
        'purple-800': '#6b21a8',
        'yellow-600': '#ca8a04',
        'gray-50': '#f9fafb',
        'gray-100': '#f3f4f6',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
        // Add default Tailwind colors
        'slate': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'red': {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        'pink': {
          500: '#ec4899',
        },
        'cyan': {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        'emerald': {
          500: '#10b981',
        },
        'indigo': {
          500: '#6366f1',
        },
        'teal': {
          500: '#14b8a6',
        },
        'yellow': {
          400: '#facc15',
        },
      },
      fontFamily: {
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'card-hover': 'cardHover 0.3s ease-out',
        'text-shimmer': 'textShimmer 2.5s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 10s linear infinite',
        'tilt': 'tilt 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 106, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 106, 0, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        cardHover: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-8px) scale(1.02)' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0a1a3c 0%, #1a2a4c 50%, #7a7f87 100%)',
        'gradient-orange': 'linear-gradient(135deg, #ff6a00 0%, #f97316 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
        'dots-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='22' cy='22' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'glow-orange': '0 0 20px rgba(255, 106, 0, 0.3), 0 0 40px rgba(255, 106, 0, 0.1)',
        'glow-blue': '0 0 20px rgba(10, 26, 60, 0.3), 0 0 40px rgba(10, 26, 60, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 20px 60px -10px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 106, 0, 0.1)',
        'button': '0 4px 14px 0 rgba(255, 106, 0, 0.39)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '12px',
      },
    },
  },
  plugins: [],
};

export default config;
