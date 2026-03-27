import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Platform } from 'react-native';
import { globalStyles } from '../styles/theme';

const teamMembers = [
  {
    id: 1,
    name: 'Ивайло Петров',
    role: 'Адвокат по правата на човека',
    quote: '„Виждал съм как корупцията лишава хората от техните основни права. Боря се за прозрачност.“',
    image: require('../../assets/person1.jpeg')
  },
  {
    id: 2,
    name: 'Димитър Стоянов',
    role: 'Бивш главен разследващ полицай',
    quote: '„В системата видях как делата се потулват. Тук сме, за да сложим край на това.“',
    image: require('../../assets/person2.webp')
  },
  {
    id: 3,
    name: 'Георги Иванов',
    role: 'Икономист и финансов анализатор',
    quote: '„Огромни публични средства изчезват всяка година. Искам справедливо разпределение.“',
    image: require('../../assets/person3.jpeg')
  }
];

export default function TeamCarousel() {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.heading, styles.title]}>Нашият екип</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent} // Note: gap might not work natively in ScrollView, use margins inside map if native, but gap works on RNW for flex rows typically.
        style={styles.scrollView}
      >
        {teamMembers.map((member, index) => (
          <View key={member.id} style={[styles.card, { marginRight: index !== teamMembers.length - 1 ? 32 : 0 }]}>
            <Image source={member.image} style={styles.image} resizeMode="cover" />
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.role}>{member.role}</Text>
            <Text style={styles.quote}>{member.quote}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 80,
  },
  title: {
    marginBottom: 40,
  },
  scrollView: {
    width: '100%',
    ...(Platform.OS === 'web' ? {
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
    } : {})
  },
  scrollContent: {
    flexDirection: 'row',
    paddingRight: 40, // End spacing
  },
  card: {
    width: 380, // wide cards for easy reading
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 24,
    padding: 40,
    borderWidth: 1,
    borderColor: 'rgba(27, 94, 32, 0.1)',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 32,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgba(27, 94, 32, 0.2)',
  },
  name: {
    fontFamily: globalStyles.heading.fontFamily,
    fontSize: 32,
    color: '#1B5E20',
    marginBottom: 8,
    textAlign: 'center',
  },
  role: {
    fontFamily: globalStyles.text.fontFamily,
    fontSize: 20,
    color: '#144d18',
    opacity: 0.8,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  quote: {
    fontFamily: globalStyles.subheading.fontFamily,
    fontSize: 24,
    color: '#1B5E20',
    lineHeight: 36,
    textAlign: 'center',
  }
});
