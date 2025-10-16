import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

// Definimos as propriedades que nosso botão vai aceitar
interface BotaoProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function Botao({
  title,
  backgroundColor = "#8359E3",
  textColor = "#FFFFFF",
  style,
  ...rest
}: BotaoProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }, style]}
      {...rest}
    >
      <Text style={[styles.texto, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  texto: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
