module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#1E293B', // custom slate-950
          900: '#0F172A', // custom slate-900
        },
      },
      animation: {
        'pulse-glow': 'pulse 2s infinite, glow 2s infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(72, 187, 120, 1)' },
          '50%': { boxShadow: '0 0 20px rgba(72, 187, 120, 1)' },
        },
      },
      gradients: {
        'emerald-blue': ['#34D399', '#3B82F6'], // gradient from emerald to blue
      },
    },
  },
  variants: {},
  plugins: [],
};
