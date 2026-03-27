import React from 'react';
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity, Linking } from 'react-native';
import { globalStyles } from '../styles/theme';
import PartnerLogos from '../components/PartnerLogos';
import TeamCarousel from '../components/TeamCarousel';

export default function HomePage() {
  const peevskiSrc = require('../../assets/peevski_future_of_bulgaria.jpg');
  const radevSrc = require('../../assets/radev_future_of_bulgaria.jpg');



  return (
    <View style={styles.container}>
      <Text style={[globalStyles.heading, styles.mainTitle]}>Време е за промяна</Text>
      
      <Text style={[globalStyles.subheading, styles.highlight]}>
        Forward BG: корупцията излиза извън контрол в България.
      </Text>
      
      <Text style={globalStyles.paragraph}>
        Нашите лидери се борят за влияние, а обикновените хора страдат. Ние водим кампания за три неща:
      </Text>

      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.tiktok.com/@forwardbg')}>
          <Image source={require('../../assets/tiktok.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/forwardbg')}>
          <Image source={require('../../assets/instagram.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/forwardbg')}>
          <Image source={require('../../assets/facebook.png')} style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
      

      <View style={styles.pointsContainer}>
        <View style={styles.point}>
          <Text style={[globalStyles.heading, styles.pointNumber]}>1</Text>
          <Text style={[globalStyles.paragraph, styles.pointText]}>
            <Text style={{fontFamily: globalStyles.heading.fontFamily}}>Ясна отчетност за нашите лидери.</Text> Никой политик, който е разследван за корупция, не трябва да заема длъжност и никой, който е осъден, не трябва да има право да заема длъжност.
          </Text>
        </View>

        <View style={styles.point}>
          <Text style={[globalStyles.heading, styles.pointNumber]}>2</Text>
          <Text style={[globalStyles.paragraph, styles.pointText]}>
            <Text style={{fontFamily: globalStyles.heading.fontFamily}}>Пълно разследване</Text> на корупцията в държавата.
          </Text>
        </View>

        <View style={styles.point}>
          <Text style={[globalStyles.heading, styles.pointNumber]}>3</Text>
          <Text style={[globalStyles.paragraph, styles.pointText]}>
            <Text style={{fontFamily: globalStyles.heading.fontFamily}}>Справедливост.</Text> Замразяване и преразпределяне на всички пари, придобити от хора, осъдени за корупция, подкупи, измами или свързани с тях престъпления.
          </Text>
        </View>
      </View>

      <PartnerLogos />

      <View style={styles.whySection}>
        <Text style={[globalStyles.heading, styles.whyHeading]}>Защо правим това?</Text>
        
        <Text style={globalStyles.paragraph}>
          Корупцията не е просто абстрактно понятие – тя ограбва бъдещето ни. Тя отнема средства от нашите болници, пътища и училища, за да обогати малцина властимащи. Ние сме обикновени граждани, които са уморени да наблюдават как държавата работи срещу собствения си народ.
        </Text>
        
        <Text style={globalStyles.paragraph}>
          Когато политиците крадат безнаказано, те разрушават доверието в демократичните институции и карат младите хора да напускат родината си. Време е да сложим край на тази култура на укриване и липса на последствия. Ние вярваме, че прозрачността и строгите закони са единственият път напред.
        </Text>
        
        <Text style={globalStyles.paragraph}>
          Тази кампания е създадена, за да даде глас на мнозинството българи, които искат честна държава. Искаме ясни граници – ако си престъпил закона, нямаш място във властта. Присъединете се към нас и заедно ще изградим България, в която правилата важат за всички.
        </Text>
      </View>

      <View style={styles.approachSection}>
        <Text style={[globalStyles.heading, styles.approachHeading]}>Нашият подход</Text>
        <Text style={globalStyles.paragraph}>
          Ние вярваме, че промяната започва с информираността. Затова активно създаваме въздействащо съдържание в социалните мрежи, за да разкрием истинското лице на корупцията и да предизвикаме обществен дебат.
        </Text>
        
        <Text style={globalStyles.paragraph}>
          Нашата основна цел е всеки гражданин да осъзнае жизненоважното значение на независимата, честна и неподкупна съдебна система. Само силно и будно общество може да потърси реална отговорност от лидерите.
        </Text>

        <View style={styles.sideBySideImages}>
          <Image source={radevSrc} style={styles.sideImage} resizeMode="contain" />
          <Image source={peevskiSrc} style={styles.sideImage} resizeMode="contain" />
        </View>
      </View>

      <TeamCarousel />
      
      <Text style={[globalStyles.paragraph, styles.conclusion]}>
        Бъдещето на България зависи от нас. Подкрепете нашата кампания за чиста и прозрачна държава.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
  },
  mainTitle: {
    fontSize: 80, // Massive title for impact
    marginBottom: 40,
    lineHeight: 88,
  },
  highlight: {
    fontSize: 48,
    lineHeight: 60,
    color: '#144d18',
    marginBottom: 60,
  },
  pointsContainer: {
    marginTop: 60,
    marginBottom: 80,
    gap: 60,
  },
  point: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 24,
  },
  pointNumber: {
    fontSize: 80,
    marginRight: 40,
    marginBottom: 0,
    color: 'rgba(27, 94, 32, 0.3)',
    lineHeight: 80,
    marginTop: -8,
  },
  pointText: {
    flex: 1,
    marginBottom: 0,
  },
  sideBySideImages: {
    flexDirection: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth > 768 ? 'row' : 'column',
    gap: 40,
    marginTop: 60,
  },
  sideImage: {
    flex: 1,
    height: 600,
    borderRadius: 24,
    width: '100%',
  },
  whySection: {
    marginBottom: 80,
    padding: 60,
    backgroundColor: 'rgba(27, 94, 32, 0.03)',
    borderRadius: 24,
  },
  whyHeading: {
    marginBottom: 40,
  },
  approachSection: {
    marginBottom: 40,
  },
  approachHeading: {
    marginBottom: 40,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 60,
  },
  socialIcon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    opacity: 0.8,
  },
  conclusion: {
    fontFamily: globalStyles.subheading.fontFamily,
    fontSize: 36,
    textAlign: 'center',
    marginTop: 40,
  }
});
