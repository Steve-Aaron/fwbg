import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { COLORS, globalStyles } from '../styles/theme';

const NAV_ITEMS = [
  { id: 'home', label: 'Начало' },
  { id: 'about', label: 'За нас' },
  { id: 'blog', label: 'Блог (очаквайте скоро)' },
  { id: 'survey', label: 'Анкета (очаквайте скоро)' },
  { id: 'privacy', label: 'Поверителност' },
];

/**
 * SideNav Component
 * Renders the permanent 4-column wide side navigation bar.
 * Designed to look like imaga.ai with large copy-led links, generous padding, 
 * and a light pastel green background to match the Forward BG brand.
 * 
 * @param {Object} props
 * @param {string} props.activePage - Currently active page identifier.
 * @param {boolean} props.isMobile - Whether the viewport is mobile width.
 */
export default function SideNav({ activePage, onPageSelect, isMobile }) {
  return (
    <View style={[styles.sidebar, isMobile && styles.sidebarMobile]}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/logo.jpg')} 
          style={styles.logo} 
          resizeMode="cover" 
        />
        <Text style={[globalStyles.heading, styles.brandName]}>Forward BG</Text>
      </View>
      
      <View style={styles.navLinks}>
        {NAV_ITEMS.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={[styles.navItem, activePage === item.id && styles.activeNavItem]}
            onPress={() => onPageSelect(item.id)}
          >
            <Text style={[
              globalStyles.text, 
              styles.navText,
              activePage === item.id && styles.activeNavText
            ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.footer}>
        <Text style={[globalStyles.text, styles.footerText]}>© 2026 Forward BG</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: '33.333%', // 4-col of 12
    maxWidth: 350,
    minWidth: 300,
    backgroundColor: COLORS.sidebarBg,
    paddingTop: 80,
    paddingBottom: 60,
    paddingHorizontal: 40,
    borderRightWidth: 1,
    borderRightColor: 'rgba(27, 94, 32, 0.15)',
    justifyContent: 'space-between',
  },
  sidebarMobile: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    borderRightWidth: 0,
    paddingTop: 40,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'flex-start',
    marginBottom: 60,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: 'rgba(27, 94, 32, 0.3)',
  },
  brandName: {
    fontSize: 32,
    textAlign: 'left',
    marginBottom: 0,
  },
  navLinks: {
    flex: 1,
  },
  navItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
    borderRadius: 8,
    marginLeft: -20, // Negative margin to align text while keeping touch area large
    ...(Platform.OS === 'web' ? {
      transitionDuration: '0.2s',
      cursor: 'pointer',
    } : {})
  },
  activeNavItem: {
    backgroundColor: 'rgba(27, 94, 32, 0.1)',
  },
  navText: {
    fontSize: 22,
    color: COLORS.text,
  },
  activeNavText: {
    fontFamily: globalStyles.heading.fontFamily,
  },
  footer: {
    alignItems: 'flex-start',
  },
  footerText: {
    fontSize: 16,
    opacity: 0.7,
  }
});
