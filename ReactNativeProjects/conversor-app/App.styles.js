import { StyleSheet } from "react-native";
import { colors } from "./src/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  subTitle: {
    color: colors.textSecondary,
    fontSize: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: 24,
    marginBottom: 24,
  },
  label: {
    color: colors.textSecondary,
    marginBottom: 8,
    fontSize: 14,
  },
  currencyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  swapButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24,
  },
  swapButtonText: {
    color: colors.text,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  convertButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24,
  },
  convertButtonDisabled: {
    backgroundColor: colors.disabled,
  },
});
