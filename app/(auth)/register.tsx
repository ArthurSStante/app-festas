import Botao from "@/src/components/button";
import SocialButton from "@/src/components/socialButton";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import EllipseBackground from "../../src/components/EllipseBackground";

export default function CadastroScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <EllipseBackground />
      <View>
        <Image
          source={require("../../assets/images/illustrations/Saly-3.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Botao
            title="Ja tem uma conta? Entre"
            onPress={() => router.push("/login")}
          />
        </View>
        <View>
          <Botao
            title="Crie uma conta"
            backgroundColor="White"
            textColor="#8359E3"
            style={{
              borderWidth: 0.5,
              borderColor: "#8359E3",
            }}
          />
        </View>
        <View>
          <Text style={styles.text}> Ou entrar com</Text>
        </View>
        <View style={styles.socialButtonsContainer}>
          <SocialButton
            type="google"
            onPress={() => console.log("login com Google")}
          />
          <SocialButton
            type="facebook"
            onPress={() => console.log("login com Facebook")}
          />
          <SocialButton
            type="apple"
            onPress={() => console.log("login com Apple")}
          />
          <SocialButton
            type="email"
            onPress={() => console.log("login com Email")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 30,
    paddingHorizontal: 11,
    paddingVertical: 20,
    gap: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  image: {
    width: 428,
    height: 432,
    resizeMode: "contain",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
