import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { careerPhases } from '../../constants/careerData';
import { CalculatorState } from '../../types/calculator';
import { calculateRetirement } from '../../utils/calculations';

interface ResultsProps {
  calculatorData: CalculatorState;
  onNavigateBack: () => void;
  onNewSimulation: () => void;
}

export const Results: React.FC<ResultsProps> = ({
  calculatorData,
  onNavigateBack,
  onNewSimulation,
}) => {
  // Cálculos reais de juros compostos
  const results = calculateRetirement(calculatorData);

  const phaseResults = results.phases.map((result, index) => ({
    ...result,
    color: careerPhases[index].color,
  }));

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
          <Text style={styles.title}>Resultado da Simulação</Text>
        </View>

        <View style={styles.finalAmount}>
          <Text style={styles.finalAmountLabel}>Montante Final</Text>
          <Text style={styles.finalAmountValue}>
            R$ {results.finalAmount.toLocaleString('pt-BR')}
          </Text>
          <Text style={styles.finalAmountSubtitle}>
            Em {results.totalYears} anos de carreira
          </Text>
        </View>

        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Card style={styles.summaryCard}>
              <Text style={styles.summaryLabel}>Total Investido</Text>
              <Text style={[styles.summaryValue, { color: colors.primary }]}>
                R$ {results.totalInvested.toLocaleString('pt-BR')}
              </Text>
            </Card>
            <Card style={styles.summaryCard}>
              <Text style={styles.summaryLabel}>Rendimentos</Text>
              <Text style={[styles.summaryValue, { color: colors.success }]}>
                R$ {results.totalReturns.toLocaleString('pt-BR')}
              </Text>
            </Card>
          </View>
        </View>

        <View style={styles.timeline}>
          <Text style={styles.sectionTitle}>Evolução por Fase</Text>
          {phaseResults.map((result, index) => (
            <Card key={index} style={styles.phaseResult}>
              <View style={styles.phaseHeader}>
                <View style={[styles.phaseIndicator, { backgroundColor: result.color }]} />
                <Text style={styles.phaseName}>{result.phase}</Text>
                <Text style={styles.phaseYears}>
                  {result.yearsInPhase} {result.yearsInPhase === 1 ? 'ano' : 'anos'}
                </Text>
              </View>
              
              <View style={styles.phaseDetails}>
                <View style={styles.phaseDetailRow}>
                  <Text style={styles.phaseDetailLabel}>Economia mensal:</Text>
                  <Text style={styles.phaseDetailValue}>
                    R$ {result.monthlySavings.toLocaleString('pt-BR', { 
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0 
                    })}
                  </Text>
                </View>
                <View style={styles.phaseDetailRow}>
                  <Text style={styles.phaseDetailLabel}>Total investido:</Text>
                  <Text style={styles.phaseDetailValue}>
                    R$ {result.totalInvested.toLocaleString('pt-BR', { 
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0 
                    })}
                  </Text>
                </View>
                <View style={styles.phaseDetailRow}>
                  <Text style={styles.phaseDetailLabel}>Montante acumulado:</Text>
                  <Text style={[styles.phaseDetailValue, { color: result.color, fontWeight: '700' }]}>
                    R$ {result.accumulatedAmount.toLocaleString('pt-BR', { 
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0 
                    })}
                  </Text>
                </View>
              </View>
            </Card>
          ))}
        </View>

        <View style={styles.info}>
          <Card>
            <Text style={styles.infoTitle}>Configurações Utilizadas</Text>
            <Text style={styles.infoText}>
              • Juros: {calculatorData.interestRate}% {calculatorData.interestType === 'annual' ? 'anuais' : 'mensais'}
            </Text>
            <Text style={styles.infoText}>
              • Percentual de economia: {calculatorData.savingsPercentage}%
            </Text>
            {calculatorData.initialAmount > 0 && (
              <Text style={styles.infoText}>
                • Valor inicial: R$ {calculatorData.initialAmount.toLocaleString('pt-BR')}
              </Text>
            )}
          </Card>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Nova Simulação"
          onPress={onNewSimulation}
          size="large"
          style={styles.newSimulationButton}
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
  finalAmount: {
    padding: 24,
    backgroundColor: colors.background,
    alignItems: 'center',
    marginBottom: 8,
  },
  finalAmountLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  finalAmountValue: {
    ...typography.h1,
    color: colors.success,
    fontWeight: '700',
  },
  finalAmountSubtitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 4,
  },
  summary: {
    padding: 24,
    backgroundColor: colors.background,
    marginBottom: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
  },
  summaryCard: {
    flex: 1,
    alignItems: 'center',
  },
  summaryLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  summaryValue: {
    ...typography.h3,
    fontWeight: '700',
  },
  timeline: {
    padding: 24,
    backgroundColor: colors.background,
    marginBottom: 8,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: 16,
  },
  phaseResult: {
    marginBottom: 12,
  },
  phaseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  phaseIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  phaseName: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
    flex: 1,
  },
  phaseYears: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  phaseDetails: {
    gap: 8,
  },
  phaseDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  phaseDetailLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  phaseDetailValue: {
    ...typography.caption,
    color: colors.text,
    fontWeight: '600',
  },
  info: {
    padding: 24,
    backgroundColor: colors.background,
    marginBottom: 8,
  },
  infoTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: 12,
  },
  infoText: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  footer: {
    padding: 24,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  newSimulationButton: {
    width: '100%',
  },
});