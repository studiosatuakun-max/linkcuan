import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
        card: '#1e293b',
        text: '#f1f5f9',
        brand: '#facc15',
        brandHover: '#eab308',
        accent: '#22d3ee',
      },
      borderRadius: { xl: '16px' },
    },
  },
  plugins: [],
} satisfies Config;
