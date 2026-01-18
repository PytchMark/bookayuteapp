import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0f',
        scarlet: '#ff2f2f',
        graphite: '#1b1b22',
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 47, 47, 0.25)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(255, 47, 47, 0.2), transparent 55%)',
      },
    },
  },
  plugins: [],
};

export default config;
