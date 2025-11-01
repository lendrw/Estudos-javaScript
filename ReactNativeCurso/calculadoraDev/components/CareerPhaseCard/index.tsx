import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Card } from '../ui/Card';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { CareerPhase } from '../../constants/careerData';

interface CareerPhaseCardProps {
  phase: CareerPhase;
  yearsInPhase: number;
  onYearsChange: (years: number) => void;
  savingsPercentage: number;
  isActive?: boolean;
}

export const CareerPhaseCard: React.FC<CareerPhaseCardProps> = ({
  phase,
  yearsInPhase,
  onYearsChange,
  savingsPercentage,
  isActive = false,
}) => {
  const monthlySavings = (phase.salary * savingsPercentage) / 100;

  return (
    <Card style={[styles.card, isActive && styles.activeCard]}>
      <View style={[styles.header, { backgroundColor: phase.color }]}>
        <Text style={styles.level}>{phase.level}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.salary}>
          R$ {phase.salary.toLocaleString('pt-BR')}
        </Text>
        <Text style={styles.description}>{phase.description}</Text>
        
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>
            Tempo na fase: {yearsInPhase} {yearsInPhase === 1 ? 'ano' : 'anos'}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={10}
            value={yearsInPhase}
            onValueChange={onYearsChange}
            step={1}
            minimumTrackTintColor={phase.color}
            maximumTrackTintColor={colors.border}
            thumbStyle={{ backgroundColor: phase.color }}
          />
        </View>
        
        <View style={styles.savings}>
          <Text style={styles.savingsLabel}>Economia mensal:</Text>
          <Text style={[styles.savingsValue, { color: phase.color }]}>
            R$ {monthlySavings.toLocaleString('pt-BR', { 
              minimumFractionDigits: 0,
              maximumFractionDigits: 0 
            })}
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    marginRight: 16,
    padding: 0,
  },
  activeCard: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  header: {
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  level: {
    ...typography.h3,
    color: colors.background,
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },
  salary: {
    ...typography.h2,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 4,
  },
  description: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
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
  savings: {
    alignItems: 'center',
  },
  savingsLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  savingsValue: {
    ...typography.h3,
    fontWeight: '700',
  },
});