import { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import {
  useFonts,
  AveriaSerifLibre_400Regular,
  AveriaSerifLibre_700Bold,
  AveriaSerifLibre_400Regular_Italic,
  AveriaSerifLibre_700Bold_Italic,
} from '@expo-google-fonts/averia-serif-libre';
import { Helmet } from 'react-helmet';

import SideNav from './src/components/SideNav';
import MainContent from './src/components/MainContent';
import { COLORS, globalStyles } from './src/styles/theme';
import { meta } from './assets/meta';

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

  const [splashFinished, setSplashFinished] = useState(false);
  const splashAnim = useRef(new Animated.Value(0)).current;

  const [fontsLoaded] = useFonts({
    AveriaSerifLibre_400Regular,
    AveriaSerifLibre_700Bold,
    AveriaSerifLibre_400Regular_Italic,
    AveriaSerifLibre_700Bold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      const timeout = setTimeout(() => {
        Animated.timing(splashAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }).start(() => setSplashFinished(true));
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [fontsLoaded, splashAnim]);

  if (!fontsLoaded) {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={meta.url} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={meta.url} />
          <meta property="twitter:title" content={meta.title} />
          <meta property="twitter:description" content={meta.description} />
          <meta property="twitter:image" content={meta.image} />

          <style id="expo-reset">{`
            html,
            body {
              height: 100%;
            }

            body {
              overflow: hidden;
            }

            #root {
              display: flex;
              height: 100%;
              flex: 1;
            }
          `}</style>
        </Helmet>

        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.text} />
        </View>
      </>
    );
  }

  const handlePageSelect = (page) => {
    setActivePage(page);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  const targetX = isMobile ? 24 : 40;
  const targetY = isMobile ? 24 : 40;

  const initialX = width / 2 - 60;
  const initialY = height / 2 - 60;

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
    outputRange: [isMobile ? 2 : 4, isMobile ? 0.3 : 1],
  });

  const splashOpacity = splashAnim.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [1, 1, 0],
  });

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />

        <style id="expo-reset">{`
          html,
          body {
            height: 100%;
          }

          body {
            overflow: hidden;
          }

          #root {
            display: flex;
            height: 100%;
            flex: 1;
          }
        `}</style>
      </Helmet>

      <View style={styles.container}>
        {(!isMobile || mobileMenuOpen) && (
          <View style={[isMobile ? styles.mobileNavOverlay : null, { zIndex: 10 }]}>
            <SideNav
              activePage={activePage}
              onPageSelect={handlePageSelect}
              isMobile={isMobile}
            />
          </View>
        )}

        {isMobile && !mobileMenuOpen && (
          <View style={styles.mobileHeader}>
            <Text style={[globalStyles.heading, styles.mobileBrand]}>Forward BG</Text>
            <TouchableOpacity
              onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={styles.menuButton}
            >
              <Text style={styles.menuButtonText}>
                {mobileMenuOpen ? 'X' : '☰'}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.contentWrapper}>
          <MainContent activePage={activePage} />
        </View>

        {!splashFinished && (
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              styles.splashContainer,
              { opacity: splashOpacity },
            ]}
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
                    { scale: logoScale },
                  ],
                },
              ]}
            />
          </Animated.View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    ...(Platform.OS === 'web'
      ? {
          height: '100vh',
          backgroundImage: COLORS.backgroundGradientStr,
          backgroundAttachment: 'fixed',
        }
      : {
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
    marginBottom: 0,
    fontSize: 28,
  },
  menuButton: {
    padding: 8,
  },
  menuButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
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
      web: {
        backgroundImage: COLORS.backgroundGradientStr,
      },
    }),
  },
  splashLogo: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});