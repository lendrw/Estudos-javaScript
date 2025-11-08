import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  double?: boolean;
  triple?: boolean;
  operation?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  double,
  triple,
  operation,
}) => {
  const buttonStyles: ViewStyle[] = [styles.buttonContainer];

  if (double) buttonStyles.push(styles.buttonDouble);
  if (triple) buttonStyles.push(styles.buttonTriple);
  if (operation) buttonStyles.push(styles.operationButton);

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text
        style={[
          styles.buttonText,
          operation ? styles.operationButtonText : null,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  buttonText: {
    fontSize: 32,
    color: "#000",
    textAlign: "center",
  },
  operationButton: {
    backgroundColor: "#fa8231",
  },
  operationButtonText: {
    color: "#fff",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  },
});

export default Button;
