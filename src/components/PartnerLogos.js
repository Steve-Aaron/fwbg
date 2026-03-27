import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { globalStyles } from '../styles/theme';

/**
 * PartnerLogos Component
 * Displays a row of placeholder client/partner logos to provide
 * social proof and align with premium site aesthetics.
 */
export default function PartnerLogos() {
  const iconProps = {
    size: 48,
    color: 'rgba(27, 94, 32, 0.6)',
    strokeWidth: 1.5,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Работим за</Text>
      <View style={styles.logosRow}>
        <View style={styles.logoItem}>
          <Text style={styles.iconPlaceholder}>🌍</Text>
          <Text style={styles.logoText}>Глобална прозрачност</Text>
        </View>
        <View style={styles.logoItem}>
          <Text style={styles.iconPlaceholder}>🛡️</Text>
          <Text style={styles.logoText}>Антикорупционен наблюдател</Text>
        </View>
        <View style={styles.logoItem}>
          <Text style={styles.iconPlaceholder}>🏛️</Text>
          <Text style={styles.logoText}>Гражданска правосъдна лига</Text>
        </View>
        <View style={styles.logoItem}>
          <Text style={styles.iconPlaceholder}>⚖️</Text>
          <Text style={styles.logoText}>Съдебна система, готова да преследва елита</Text>
        </View>
        <View style={styles.logoItem}>
          <Text style={styles.iconPlaceholder}>📄</Text>
          <Text style={styles.logoText}>Нулева толерантност към корупцията</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(27, 94, 32, 0.1)',
    marginVertical: 60,
  },
  label: {
    fontFamily: globalStyles.text.fontFamily,
    fontSize: 20,
    color: 'rgba(27, 94, 32, 0.5)',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 40,
    textAlign: 'center',
  },
  logosRow: {
    flexDirection: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth > 768 ? 'row' : 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 40,
  },
  logoItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  logoText: {
    fontFamily: globalStyles.heading.fontFamily,
    fontSize: 24,
    color: 'rgba(27, 94, 32, 0.6)',
  },
  iconPlaceholder: {
    fontSize: 32,
  }
});
