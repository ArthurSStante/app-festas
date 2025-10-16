import Botao from "@/src/components/button";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import EllipseBackground from "../../src/components/EllipseBackground";

export default function Onboarding() {
  const router = useRouter();
  return (
    // Usamos SafeAreaView como o container principal para segurança nas bordas
    <SafeAreaProvider style={styles.container}>
      <EllipseBackground />
      {/* 1. Container para o conteúdo principal (título e imagem) */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          O aplicativo perfeito para organizar sua festa
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/illustrations/Saly-2.png")}
            style={styles.image}
          />
        </View>
      </View>

      {/* 2. Container exclusivo para o botão */}
      <View style={styles.buttonContainer}>
        <Botao title="Vamos lá" onPress={() => router.push("/register")} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o container ocupar a tela inteira
    justifyContent: "space-around", // Empurra o conteúdo para o topo e o botão para o fundo
    backgroundColor: "transparent",
  },
  contentContainer: {
    // Este container agrupa o conteúdo de cima
    alignItems: "center", // Centraliza o conteúdo horizontalmente
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    // Adiciona espaçamento para não colar nas laterais da tela
    marginHorizontal: 20,
    marginBottom: 40, // Espaço entre o título e a imagem
  },
  imageContainer: {
    // Novo container para a imagem para controlar o alinhamento
    width: "100%", // Ocupa toda a largura
    alignItems: "flex-start", // Alinha a imagem à esquerda ("colada na tela")
  },
  image: {
    width: 284,
    height: 336,
    resizeMode: "contain",
  },
  buttonContainer: {
    // Adiciona o espaçamento lateral de 30px pedido
    paddingHorizontal: 30,
  },
});
