import { Slot, Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import EllipseBackground from "../../src/components/EllipseBackground"; // Verifique o caminho

export default function AuthLayout() {
  return (
    <SafeAreaProvider style={styles.container}>
      {/* 1. O fundo é renderizado primeiro, ocupando toda a tela */}
      <EllipseBackground />

      {/* 2. Configuração global do cabeçalho para este grupo de telas */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* 3. O <Slot /> é onde o conteúdo da tela atual (login, cadastro, etc.) será renderizado */}
      <Slot />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o container ocupe a tela inteira
  },
});
