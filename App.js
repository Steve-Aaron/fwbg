import { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator, Platform, useWindowDimensions, TouchableOpacity, Text, Animated } from 'react-native';
import { 
  useFonts, 
  AveriaSerifLibre_400Regular, 
  AveriaSerifLibre_700Bold, 
  AveriaSerifLibre_400Regular_Italic, 
  AveriaSerifLibre_700Bold_Italic 
} from '@expo-google-fonts/averia-serif-libre';
import SideNav from './src/components/SideNav';
import MainContent from './src/components/MainContent';
import { COLORS, globalStyles } from './src/styles/theme';

/**
 * Root Application Component
 * Handles the loading of Averia Serif Libre Google fonts via Expo-Font.
 * Manages the active page state and renders the `SideNav` and `MainContent` components
 * in a flex-row layout to achieve a persistent sidebar web experience.
 * Incorporates mobile responsiveness: Collapses the sidebar into a toggled menu under 767px.
 */
export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { width, height } = useWindowDimensions();
  const isMobile = width < 767;

  // Splash Screen Animation State
  const [splashFinished, setSplashFinished] = useState(false);
  const splashAnim = useRef(new Animated.Value(0)).current;

  let [fontsLoaded] = useFonts({
    AveriaSerifLibre_400Regular,
    AveriaSerifLibre_700Bold,
    AveriaSerifLibre_400Regular_Italic,
    AveriaSerifLibre_700Bold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Small delay so fonts strictly render, then slide to top left
      setTimeout(() => {
        Animated.timing(splashAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }).start(() => setSplashFinished(true));
      }, 500);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.text} />
      </View>
    );
  }

  const handlePageSelect = (page) => {
    setActivePage(page);
    if (isMobile) setMobileMenuOpen(false);
  };

  // Target coordinates for top-left layout
  const targetX = isMobile ? 24 : 40;
  const targetY = isMobile ? 24 : 40;

  // Initial center coordinates
  const initialX = (width / 2) - 60; // 60 is half of 120 (logo width)
  const initialY = (height / 2) - 60;

  // Interpolations
  const logoTranslateX = splashAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [initialX - targetX, 0],
  });
  const logoTranslateY = splashAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [initialY - targetY, 0],
  });
  const logoScale = splashAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [isMobile ? 2 : 4, isMobile ? 0.3 : 1], // Shrinks small on mobile where no logo exists or 1:1 on desktop
  });
  const splashOpacity = splashAnim.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [1, 1, 0], // bg fades out at the very end
  });

  return (
    <View style={styles.container}>
      {/* Background layer stays completely active beneath splashing wrapper */}
      
      {(!isMobile || mobileMenuOpen) && (
        <View style={[isMobile ? styles.mobileNavOverlay : null, { zIndex: 10 }]}>
          <SideNav activePage={activePage} onPageSelect={handlePageSelect} isMobile={isMobile} />
        </View>
      )}

      {isMobile && !mobileMenuOpen && (
        <View style={styles.mobileHeader}>
          <Text style={[globalStyles.heading, styles.mobileBrand]}>Forward BG</Text>
          <TouchableOpacity onPress={() => setMobileMenuOpen(!mobileMenuOpen)} style={styles.menuButton}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: COLORS.text}}>{mobileMenuOpen ? 'X' : '☰'}</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.contentWrapper}>
        <MainContent activePage={activePage} />
      </View>

      {!splashFinished && (
        <Animated.View 
          style={[StyleSheet.absoluteFill, styles.splashContainer, { opacity: splashOpacity, pointerEvents: 'none' }]}
        >
          <Animated.Image 
            source={require('./assets/logo.jpg')} 
            style={[
              styles.splashLogo,
              { 
                top: targetY, 
                left: targetX,
                transform: [
                  { translateX: logoTranslateX },
                  { translateY: logoTranslateY },
                  { scale: logoScale }
                ]
              }
            ]} 
          />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    ...(Platform.OS === 'web' ? {
      height: '100vh',
      backgroundImage: COLORS.backgroundGradientStr,
      backgroundAttachment: 'fixed',
    } : {
      height: '100%',
    }),
  },
  contentWrapper: {
    flex: 1,
    position: 'relative',
  },
  mobileHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: COLORS.background,
    zIndex: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  mobileBrand: {
    marginBottom: 0, // Override heading margin
    fontSize: 28,
  },
  menuButton: {
    padding: 8,
  },
  mobileNavOverlay: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.background,
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  splashContainer: {
    zIndex: 9999,
    backgroundColor: COLORS.background,
    ...Platform.select({
      web: { backgroundImage: COLORS.backgroundGradientStr }
    })
  },
  splashLogo: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
  }
});
