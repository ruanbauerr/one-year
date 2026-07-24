// Paleta fofa/pastel do site (rosa, lilás, corações)
export const colors = {
  background: '#FFF5F8',
  primary: '#F4B6C2',      // rosa suave
  secondary: '#D8C2F0',    // lilás suave
  accent: '#F49AC2',       // rosa mais vivo (destaques, botões)
  textDark: '#5A4B57',
  textLight: '#8A7A85',
  white: '#FFFFFF',
  cardShadow: 'rgba(90, 75, 87, 0.15)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textDark,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.textLight,
  },
  body: {
    fontSize: 15,
    color: colors.textDark,
    lineHeight: 22,
  },
};