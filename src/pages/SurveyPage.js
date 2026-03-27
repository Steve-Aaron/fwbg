import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/theme';

export default function SurveyPage() {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>Анкета</Text>
      <View style={styles.placeholderBox}>
        <Text style={globalStyles.subheading}>Очаквайте скоро</Text>
        <Text style={globalStyles.paragraph}>
          Вашето мнение е важно за нас. Скоро ще стартираме национално проучване относно корупцията.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholderBox: {
    backgroundColor: 'rgba(27, 94, 32, 0.05)',
    padding: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    minHeight: 300,
  }
});
