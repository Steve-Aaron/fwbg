import React from 'react';
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import BlogPage from '../pages/BlogPage';
import SurveyPage from '../pages/SurveyPage';
import PrivacyPage from '../pages/PrivacyPage';

/**
 * MainContent Component
 * Relies on the activePage prop to render the correct view.
 * Uses a ScrollView to allow scrolling independently of the fixed SideNav.
 * Provides high padding and constrained max-width for excellent readability.
 * 
 * @param {Object} props
 * @param {string} props.activePage - The string identifier of the active page to render.
 */
export default function MainContent({ activePage }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 767;
  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutUsPage />;
      case 'blog': return <BlogPage />;
      case 'survey': return <SurveyPage />;
      case 'privacy': return <PrivacyPage />;
      default: return <HomePage />;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={[
        styles.scrollContent,
        isMobile && styles.scrollContentMobile
      ]}>
        {renderPage()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 100,
    paddingTop: 100,
    maxWidth: 1600, // Widened significantly
  },
  scrollContentMobile: {
    padding: 24,
    paddingTop: 120, // Extra padding top for mobile header
  }
});
