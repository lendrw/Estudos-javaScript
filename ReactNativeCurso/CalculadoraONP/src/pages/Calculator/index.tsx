import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { InterestToggle } from '../../components/InterestToggle';
import { CareerPhaseCard } from '../../components/CareerPhaseCard';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { careerPhases, defaultSavingsPercentage } from '../../constants/careerData';
import { CalculatorState } from '../../types/calculator';

interface CalculatorProps {
  onNavigateToResults: (data: CalculatorState) => void;
  onNavigateBack: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
  onNavigateToResults,
  onNavigateBack,
}) => {
  const [state, setState] = useState<CalculatorState>({
    interestType: 'annual',
    interestRate: 12,
    initialAmount: 0,
    savingsPercentage: defaultSavingsPercentage,
    phaseYears: [3, 4, 5, 8],
  });

  const updatePhaseYears = (index: number, years: number) => {
    const newPhaseYears = [...state.phaseYears] as [number, number, number, number];
    newPhaseYears[index] = years;
    setState({ ...state, phaseYears: newPhaseYears });
  };

  const handleCalculate = () => {
    onNavigateToResults(state);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Button
            title="← Voltar"
            onPress={onNavigateBack}
            variant="outline"
            style={styles.backButton}
          />
          <Text style={styles.title}>Configurar Simulação</Text>
        </View>

        <View style={styles.section}>
          <InterestToggle
            value={state.interestType}
            onChange={(interestType) => setState({ ...state, interestType })}
          />
          
          <Input
            label="Taxa de Juros (%)"
            value={state.interestRate.toString()}
            onChangeText={(text) => setState({ 
              ...state, 
              interestRate: parseFloat(text) || 0 
            })}
            keyboardType="numeric"
            suffix="%"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Configurações de Economia</Text>
          
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>
              Percentual de economia: {state.savingsPercentage}%
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={10}
              maximumValue={50}
              value={state.savingsPercentage}
              onValueChange={(savingsPercentage) => setState({ ...state, savingsPercentage })}
              step={5}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor={colors.border}
            />
          </View>

          <Input
            label="Valor Inicial (opcional)"
            value={state.initialAmount.toString()}
            onChangeText={(text) => setState({ 
              ...state, 
              initialAmount: parseFloat(text) || 0 
            })}
            keyboardType="numeric"
            prefix="R$"
            placeholder="0"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fases da Carreira</Text>
          <Text style={styles.sectionSubtitle}>
            Ajuste quantos anos você pretende ficar em cada fase
          </Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.phasesScroll}
          >
            {careerPhases.map((phase, index) => (
              <CareerPhaseCard
                key={phase.id}
                phase={phase}
                yearsInPhase={state.phaseYears[index]}
                onYearsChange={(years) => updatePhaseYears(index, years)}
                savingsPercentage={state.savingsPercentage}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Calcular Aposentadoria"
          onPress={handleCalculate}
          size="large"
          style={styles.calculateButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: colors.background,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  title: {
    ...typography.h2,
    color: colors.text,
  },
  section: {
    padding: 24,
    backgroundColor: colors.background,
    marginBottom: 8,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: 8,
  },
  sectionSubtitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  sliderLabel: {
    ...typography.caption,
    color: colors.text,
    marginBottom: 8,
    fontWeight: '600',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  phasesScroll: {
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
  footer: {
    padding: 24,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  calculateButton: {
    width: '100%',
  },
});