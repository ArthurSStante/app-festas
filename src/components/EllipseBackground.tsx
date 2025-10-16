import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function EllipseBackground() {
  return (
    <View style={styles.backgroundContainer}>
      <Image
        source={require("../../assets/images/ellipseBackground.png")}
        style={styles.teste}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject, // Faz o container ocupar a tela inteira
    overflow: "hidden",
  },
  teste: {
    position: "absolute",
    width: SCREEN_WIDTH, // A largura da imagem será a largura da tela
    height: SCREEN_HEIGHT, // A altura da imagem será a altura da tela
    resizeMode: "cover", // Ajusta a imagem para cobrir toda a área, cortando se necessário
  },
});
