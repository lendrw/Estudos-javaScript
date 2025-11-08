import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "@/components/Button";
import Display from "@/components/Display";

export default function Index() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [clearNext, setClearNext] = useState(false);

  // 🧹 Limpa o display
  function clearDisplay() {
    setDisplayValue("0");
    setFirstValue(null);
    setOperation(null);
    setClearNext(false);
  }

  // 🔢 Adiciona dígitos
  function addDigit(n: string) {
    if (displayValue === "0" || clearNext) {
      setDisplayValue(n);
      setClearNext(false);
    } else {
      setDisplayValue(displayValue + n);
    }
  }

  // ➕ Define ou executa operação
  function handleOperation(op: string) {
    if (firstValue === null) {
      setFirstValue(parseFloat(displayValue));
      setOperation(op);
      setClearNext(true);
    } else if (operation) {
      const result = calculate(firstValue, parseFloat(displayValue), operation);
      setDisplayValue(result.toString());
      setFirstValue(result);
      setOperation(op === "=" ? null : op);
      setClearNext(true);
    }
  }

  // 🧮 Calcula o resultado da operação
  function calculate(a: number, b: number, op: string): number {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : 0;
      default:
        return b;
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onPress={clearDisplay} />
        <Button label="/" operation onPress={() => handleOperation("/")} />
        <Button label="7" onPress={() => addDigit("7")} />
        <Button label="8" onPress={() => addDigit("8")} />
        <Button label="9" onPress={() => addDigit("9")} />
        <Button label="*" operation onPress={() => handleOperation("*")} />
        <Button label="4" onPress={() => addDigit("4")} />
        <Button label="5" onPress={() => addDigit("5")} />
        <Button label="6" onPress={() => addDigit("6")} />
        <Button label="-" operation onPress={() => handleOperation("-")} />
        <Button label="1" onPress={() => addDigit("1")} />
        <Button label="2" onPress={() => addDigit("2")} />
        <Button label="3" onPress={() => addDigit("3")} />
        <Button label="+" operation onPress={() => handleOperation("+")} />
        <Button label="0" double onPress={() => addDigit("0")} />
        <Button label="." onPress={() => addDigit(".")} />
        <Button label="=" operation onPress={() => handleOperation("=")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttons: { flexDirection: "row", flexWrap: "wrap" },
});
