import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/theme';

export default function PrivacyPage() {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>Поверителност</Text>
      <Text style={globalStyles.paragraph}>
        Вашата поверителност е от първостепенно значение за нас. Ние събираме само минималното количество данни, необходимо за функционирането на нашите услуги.
      </Text>
      <Text style={globalStyles.paragraph}>
        Няма да споделяме, продаваме или разпространяваме вашата лична информация с трети страни без вашето изрично съгласие, освен ако това не се изисква от закона.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
