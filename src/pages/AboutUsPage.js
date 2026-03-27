import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/theme';

export default function AboutUsPage() {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>За нас</Text>
      <Text style={globalStyles.paragraph}>
        Ние сме кампания, базирана в София, посветена на изкореняването на корупцията в България.
      </Text>
      <Text style={globalStyles.paragraph}>
        Вярваме, че прозрачността, отчетността и справедливостта са основите на едно проспериращо общество. Нашата мисия е да държим политиците отговорни за техните действия и да гарантираме, че публичните ресурси служат на обикновените хора, а не на личните интереси.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
