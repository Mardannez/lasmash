const color = (token) => `rgb(var(--${token}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: color('background'),
        foreground: color('foreground'),
        brand: {
          DEFAULT: color('brand'),
          ink: color('brand-ink'),
        },
        primary: {
          DEFAULT: color('primary'),
          foreground: color('primary-foreground'),
        },
        secondary: {
          DEFAULT: color('secondary'),
          foreground: color('secondary-foreground'),
        },
        accent: {
          DEFAULT: color('accent'),
          foreground: color('accent-foreground'),
        },
        muted: {
          DEFAULT: color('muted'),
          foreground: color('muted-foreground'),
        },
        card: {
          DEFAULT: color('card'),
          foreground: color('card-foreground'),
        },
        border: color('border'),
        input: color('input'),
        ring: color('ring'),
        success: {
          DEFAULT: color('success'),
          foreground: color('success-foreground'),
        },
        warning: {
          DEFAULT: color('warning'),
          foreground: color('warning-foreground'),
        },
        destructive: {
          DEFAULT: color('destructive'),
          foreground: color('destructive-foreground'),
        },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)',
        md: 'var(--radius)',
        lg: 'calc(var(--radius) + 4px)',
        xl: 'calc(var(--radius) + 8px)',
        '2xl': 'calc(var(--radius) + 12px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
