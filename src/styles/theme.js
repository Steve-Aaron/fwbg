import { StyleSheet } from 'react-native';

/**
 * Global Theme Configuration
 * Defines the core design tokens: colors, fonts, and global typography styles.
 * Designed to provide a light pastel green background, dark forest green text,
 * and elegant Averia Serif Libre typography constraints.
 */
export const COLORS = {
  background: 'rgb(182, 205, 193)',
  backgroundGradientStr: 'linear-gradient(135deg, rgb(182, 205, 193) 0%, rgb(210, 227, 218) 100%)',
  text: '#1B5E20',       // Dark forest green
  sidebarBg: 'rgb(182, 205, 193)',  // Use same unified background for modern feel
  highlight: '#144d18',
  fadedText: 'rgba(27, 94, 32, 0.6)',
  borderLight: 'rgba(27, 94, 32, 0.15)',
  bgOverlay: 'rgba(27, 94, 32, 0.05)',
  white: '#FFFFFF',
};

export const FONTS = {
  regular: 'AveriaSerifLibre_400Regular',
  italic: 'AveriaSerifLibre_400Regular_Italic',
  bold: 'AveriaSerifLibre_700Bold',
  boldItalic: 'AveriaSerifLibre_700Bold_Italic',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: 24,
    color: COLORS.text,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: 64, // Scaled up globally
    color: COLORS.text,
    marginBottom: 32,
    lineHeight: 76,
  },
  subheading: {
    fontFamily: FONTS.italic,
    fontSize: 40, // Scaled up globally
    color: COLORS.text,
    marginBottom: 24,
    lineHeight: 52,
  },
  paragraph: {
    fontFamily: FONTS.regular,
    fontSize: 32, // Scaled up globally
    color: COLORS.text,
    marginBottom: 40,
    lineHeight: 48,
  },
});
