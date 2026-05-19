/**
 * Design System — Elgor Beatz (palette crème / encre, ton studio luxe)
 */

export const colors = {
  primary: '#f8f3ea',
  primaryDark: '#ebe4d6',
  primaryLight: '#fffdf9',

  background: '#f8f3ea',
  backgroundSecondary: 'rgba(235, 228, 214, 0.72)',

  text: '#161412',
  textSecondary: 'rgba(22, 20, 18, 0.88)',
  textTertiary: 'rgba(22, 20, 18, 0.62)',
  textMuted: 'rgba(22, 20, 18, 0.48)',

  border: 'rgba(22, 20, 18, 0.09)',
  borderHover: 'rgba(180, 83, 9, 0.38)',
  borderLight: 'rgba(22, 20, 18, 0.055)',

  accent: '#b45309',
  accentHover: '#9a3412',
  foil: '#c9a227',
} as const;

export const spacing = {
  sectionPadding: {
    mobile: 'py-20 px-4 sm:px-6 lg:px-8',
    desktop: 'py-32 px-4 sm:px-6 lg:px-8',
    large: 'py-40 px-4 sm:px-6 lg:px-8',
  },

  heroPadding: {
    top: 'pt-32',
    bottom: 'pb-20',
    full: 'pt-32 pb-20',
  },

  container: {
    sm: 'max-w-4xl',
    md: 'max-w-6xl',
    lg: 'max-w-7xl',
    xl: 'max-w-7xl',
  },

  gap: {
    sm: 'gap-4',
    md: 'gap-8',
    lg: 'gap-12',
    xl: 'gap-16',
    '2xl': 'gap-20',
  },
} as const;

export const typography = {
  h1: 'font-display text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05]',
  h2: 'font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.08]',
  h3: 'font-display text-3xl sm:text-4xl font-normal tracking-tight',
  h4: 'font-display text-2xl sm:text-3xl font-normal tracking-tight',
  h5: 'font-display text-xl sm:text-2xl font-normal tracking-tight',
  h6: 'font-display text-lg sm:text-xl font-normal tracking-tight',

  body: 'text-base sm:text-lg font-light leading-relaxed',
  bodySmall: 'text-sm sm:text-base font-light leading-relaxed',
  bodyLarge: 'text-lg sm:text-xl font-light leading-relaxed',

  label: 'text-xs uppercase tracking-[0.3em] font-light',
  labelSmall: 'text-xs uppercase tracking-wider font-light',

  button: 'text-sm font-light tracking-[0.15em] uppercase',
  buttonSmall: 'text-xs font-light tracking-wider uppercase',
} as const;

export const borders = {
  default: 'border border-stone-900/10',
  hover: 'hover:border-accent-copper/35',
  light: 'border-stone-900/6',
  accent: 'border-accent-copper/40',
} as const;

export const transitions = {
  default: 'transition-all duration-300',
  slow: 'transition-all duration-500',
  fast: 'transition-all duration-200',
} as const;

export const utils = {
  section: `${spacing.sectionPadding.desktop} border-t border-stone-900/8`,
  sectionLarge: `${spacing.sectionPadding.large} border-t border-stone-900/8`,

  container: `${spacing.container.lg} mx-auto`,
  containerCenter: `${spacing.container.lg} mx-auto text-center`,

  hero: `${spacing.heroPadding.full} px-4 sm:px-6 lg:px-8 border-b border-stone-900/8`,

  sectionHeader: 'flex items-center gap-4 mb-8 sm:mb-12 lg:mb-16',
  sectionHeaderCenter: 'flex items-center justify-center gap-4 mb-8 sm:mb-12 lg:mb-16',
  sectionHeaderLine: 'h-px w-12 bg-gradient-to-r from-foil/70 via-accent-copper/50 to-transparent',
  sectionHeaderLabel: `${typography.label} font-mono text-stone-500 tracking-[0.28em]`,

  card:
    'border border-stone-900/[0.09] bg-cream-paper/92 hover:border-foil/35 hover:shadow-lux-hover rounded-2xl transition-all duration-500 backdrop-blur-sm shadow-lux',
  cardPadding: 'p-6 sm:p-8',

  buttonPrimary:
    'rounded-sm px-12 py-4 bg-gradient-to-br from-ink via-ink to-espresso text-cream font-mono tracking-[0.12em] uppercase text-xs sm:text-sm hover:shadow-[0_20px_48px_-16px_rgba(22,20,18,0.35)] transition-all duration-300 shadow-lg shadow-stone-900/15 ring-1 ring-white/10',
  buttonSecondary:
    'rounded-sm px-12 py-4 border border-stone-900/[0.14] text-ink font-mono tracking-[0.12em] uppercase text-xs sm:text-sm hover:border-foil/45 hover:bg-cream-paper hover:shadow-md transition-all duration-300',

  textPrimary: 'text-ink',
  textSecondary: 'text-ink-muted',
  textTertiary: 'text-stone-600',
  textMuted: 'text-stone-500',
} as const;
