import React from "react";
import { StyleSheet, View, Text, ViewStyle } from "react-native";
import params from "@/src/params";
import Mine from "./Mine";
import Flag from "./Flag";

interface FieldProps {
  mined?: boolean;
  opened?: boolean;
  nearMines?: number;
  exploded?: boolean;
  flagged?: boolean;
}

const Field: React.FC<FieldProps> = ({
  mined,
  opened,
  nearMines = 0,
  exploded,
  flagged,
}) => {
  const styleField: ViewStyle[] = [styles.field];

  if (opened) styleField.push(styles.opened);
  if (exploded) styleField.push(styles.exploded);
  if (flagged) styleField.push(styles.flagged);
  if (!opened && !exploded) styleField.push(styles.regular);

  let color: string | undefined;

  if (nearMines > 0) {
    if (nearMines === 1) color = "#2A28D7";
    else if (nearMines === 2) color = "#2B520F";
    else if (nearMines > 2 && nearMines < 6) color = "#F9060A";
    else color = "#F221A9";
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 && (
        <Text style={[styles.label, { color }]}>{nearMines}</Text>
      )}
      {mined && opened && <Mine />}
      {flagged && !opened && <Flag />}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#CCC",
    borderTopColor: "#CCC",
    borderRightColor: "#333",
    borderBottomColor: "#333",
  },
  opened: {
    backgroundColor: "#999",
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: params.fontSize,
  },
  exploded: { backgroundColor: "red", borderColor: "red" },
  flagged: {},
});

export default Field;
