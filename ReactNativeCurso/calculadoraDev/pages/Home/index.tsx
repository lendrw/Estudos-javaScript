import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { careerPhases } from '../../constants/careerData';

interface HomeProps {
  onNavigateToCalculator: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateToCalculator }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.logo}>Calculadora ONP</Text>
        <Text style={styles.tagline}>Sua aposentadoria como dev</Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.title}>
          Planeje sua aposentadoria como desenvolvedor
        </Text>
        <Text style={styles.subtitle}>
          Simule quanto guardar em cada fase da carreira e veja seu patrimônio crescer com juros compostos
        </Text>
        
        <Button
          title="Começar Simulação"
          onPress={onNavigateToCalculator}
          size="large"
          style={styles.ctaButton}
        />
      </View>

      <View style={styles.phases}>
        <Text style={styles.sectionTitle}>Fases da Carreira</Text>
        {careerPhases.map((phase) => (
          <Card key={phase.id} style={styles.phaseCard}>
            <View style={styles.phaseHeader}>
              <View style={[styles.phaseIcon, { backgroundColor: phase.color }]} />
              <View style={styles.phaseInfo}>
                <Text style={styles.phaseLevel}>{phase.level}</Text>
                <Text style={styles.phaseSalary}>
                  R$ {phase.salary.toLocaleString('pt-BR')}
                </Text>
              </View>
            </View>
            <Text style={styles.phaseDescription}>{phase.description}</Text>
          </Card>
        ))}
      </View>

      <View style={styles.info}>
        <Card>
          <Text style={styles.infoTitle}>Por que juros compostos?</Text>
          <Text style={styles.infoText}>
            Os juros compostos são considerados a "oitava maravilha do mundo". 
            Quanto mais cedo você começar a investir, maior será o impacto do tempo no seu patrimônio.
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: colors.background,
  },
  logo: {
    ...typography.h1,
    color: colors.primary,
    fontWeight: '700',
  },
  tagline: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 4,
  },
  hero: {
    padding: 24,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  title: {
    ...typography.h2,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  ctaButton: {
    width: '100%',
  },
  phases: {
    padding: 24,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: 16,
  },
  phaseCard: {
    marginBottom: 12,
  },
  phaseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  phaseIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  phaseInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  phaseLevel: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
  },
  phaseSalary: {
    ...typography.body,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  phaseDescription: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  info: {
    padding: 24,
    paddingBottom: 40,
  },
  infoTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: 12,
  },
  infoText: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },
});