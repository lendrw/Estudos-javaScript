import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Button } from "./src/components/Button";
import { styles } from "./App.styles";
import { currencies } from "./src/constants/currencies";
import { Input } from "./src/components/Input";
import { ResultCard } from "./src/components/ResultCard";

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <StatusBar style="auto" />
          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subTitle}>
              Converta valore entre diferentes moedas
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  variant="primary"
                  key={currency.code}
                  currency={currency}
                ></Button>
              ))}
            </View>

            <Input label="Valor:" />

            <TouchableOpacity style={styles.swapButton}>
              <Text style={styles.swapButtonText}>↑↓</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Para: </Text>

            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  variant="secondary"
                  key={currency.code}
                  currency={currency}
                ></Button>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.convertButton}>
            <Text style={styles.swapButtonText}>Converter</Text>
          </TouchableOpacity>

          <ResultCard />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
