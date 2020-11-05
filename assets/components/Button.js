import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "SFProText-Regular",
    fontSize: 15,
    textAlign: "center",
  },
});

const Button = ({ variant, label }) => {
  const backgroundColor =
    variant === "primary" ? "#2CB9B0" : "rgba(12,13,52,0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={[styles.label, { color }]}>{label}</Text>
      </View>
    </RectButton>
  );
};

export default Button;
