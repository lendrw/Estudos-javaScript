import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';

interface InterestToggleProps {
  value: 'annual' | 'monthly';
  onChange: (value: 'annual' | 'monthly') => void;
}

export const InterestToggle: React.FC<InterestToggleProps> = ({
  value,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de Juros</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            value === 'annual' && styles.activeButton,
          ]}
          onPress={() => onChange('annual')}
        >
          <Text
            style={[
              styles.toggleText,
              value === 'annual' && styles.activeText,
            ]}
          >
            Anuais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            value === 'monthly' && styles.activeButton,
          ]}
          onPress={() => onChange('monthly')}
        >
          <Text
            style={[
              styles.toggleText,
              value === 'monthly' && styles.activeText,
            ]}
          >
            Mensais
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  label: {
    ...typography.caption,
    color: colors.text,
    marginBottom: 8,
    fontWeight: '600',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: colors.primary,
  },
  toggleText: {
    ...typography.body,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  activeText: {
    color: colors.background,
    fontWeight: '600',
  },
});