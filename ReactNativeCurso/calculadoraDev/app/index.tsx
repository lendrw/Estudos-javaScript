import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { Home } from '../pages/Home';
import { Calculator } from '../pages/Calculator';
import { Results } from '../pages/Results';
import { colors } from '../constants/colors';
import { CalculatorState } from '../types/calculator';

type Screen = 'home' | 'calculator' | 'results';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [calculatorData, setCalculatorData] = useState<CalculatorState | null>(null);

  const navigateToCalculator = () => {
    setCurrentScreen('calculator');
  };

  const navigateToResults = (data: CalculatorState) => {
    setCalculatorData(data);
    setCurrentScreen('results');
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
    setCalculatorData(null);
  };

  const navigateBack = () => {
    if (currentScreen === 'calculator') {
      setCurrentScreen('home');
    } else if (currentScreen === 'results') {
      setCurrentScreen('calculator');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigateToCalculator={navigateToCalculator} />;
      case 'calculator':
        return (
          <Calculator
            onNavigateToResults={navigateToResults}
            onNavigateBack={navigateBack}
          />
        );
      case 'results':
        return (
          <Results
            calculatorData={calculatorData!}
            onNavigateBack={navigateBack}
            onNewSimulation={navigateToHome}
          />
        );
      default:
        return <Home onNavigateToCalculator={navigateToCalculator} />;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" backgroundColor={colors.background} />
        {renderScreen()}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});