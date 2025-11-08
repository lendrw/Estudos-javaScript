import React from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  prefix?: string;
  suffix?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  prefix,
  suffix,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, error && styles.errorBorder]}>
        {prefix && <Text style={styles.prefix}>{prefix}</Text>}
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.textSecondary}
          {...props}
        />
        {suffix && <Text style={styles.suffix}>{suffix}</Text>}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    ...typography.caption,
    color: colors.text,
    marginBottom: 8,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.background,
    minHeight: 48,
  },
  errorBorder: {
    borderColor: '#EF4444',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    ...typography.body,
    color: colors.text,
  },
  prefix: {
    paddingLeft: 16,
    ...typography.body,
    color: colors.textSecondary,
  },
  suffix: {
    paddingRight: 16,
    ...typography.body,
    color: colors.textSecondary,
  },
  error: {
    ...typography.caption,
    color: '#EF4444',
    marginTop: 4,
  },
});