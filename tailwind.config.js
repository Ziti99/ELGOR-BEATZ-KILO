/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f8f3ea',
          muted: '#ebe4d6',
          deep: '#ddd4c4',
          paper: '#fffdf9',
        },
        ink: {
          DEFAULT: '#161412',
          muted: '#3f3a36',
          subtle: '#78716c',
        },
        foil: {
          DEFAULT: '#c9a227',
          muted: '#a38620',
        },
        espresso: '#151311',
        accent: {
          copper: '#b45309',
          plum: '#6b21a8',
          sage: '#4d7c0f',
        },
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'lux': '0 2px 0 rgba(255,253,249,0.55) inset, 0 28px 64px -28px rgba(22,20,18,0.18)',
        'lux-hover': '0 2px 0 rgba(255,253,249,0.65) inset, 0 40px 72px -28px rgba(22,20,18,0.24)',
        'foil': '0 0 0 1px rgba(201,162,39,0.22), 0 18px 48px -20px rgba(22,20,18,0.16)',
      },
      backgroundImage: {
        'grain-light':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

