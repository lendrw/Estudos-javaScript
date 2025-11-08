import { Dimensions, StyleSheet, Text, View } from "react-native";
import params from "../src/params";
import Field from "@/components/Field";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando Mines</Text>
      <Text style={styles.instructions}>
        Tamanho da grade:{params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
      <Field nearMines={1} opened />
      <Field nearMines={6} opened />
      <Field nearMines={3} mined />
      <Field nearMines={1} mined />
      <Field nearMines={1} opened />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged opened />
      <Field flagged/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },
  welcome: {},
  instructions: {},
});
