// import AnimatedWavesBackground from "@/src/components/AnimatedWavesBackground";
import SocialButton from "@/src/components/socialButton";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Botao from "../../src/components/button";
import EllipseBackground from "../../src/components/EllipseBackground";

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <EllipseBackground />
      <View style={styles.LoginContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.TextInputContainer}>
          <TextInput
            placeholder="Insira seu e-mail ou CNPJ"
            style={styles.input}
            keyboardType="email-address"
            placeholderTextColor={"#515151"}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Insira sua senha"
              style={styles.passwordInput}
              secureTextEntry={!passwordVisible}
              placeholderTextColor={"#515151"}
            />
            <TouchableOpacity
              style={styles.togglePasswordButton}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"}
                size={20}
                color={"#515151"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Botao title="Entrar" />

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>ou</Text>
          <View style={styles.dividerLine} />
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

        <Text style={styles.footerText}>
          Ainda não tem uma conta?
          <Text style={styles.footerTextBold}> Cadastre-se</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  LoginContainer: {
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  TextInputContainer: {},
  subtitle: {
    fontSize: 16,
    color: "#6A1B9A",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#ffffff",
    width: "100%",
    padding: 15,
    borderRadius: 30,
    fontSize: 17,
    marginVertical: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    marginVertical: 10,
    width: "100%",
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 17,
  },
  togglePasswordButton: {
    padding: 10,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(84,84,86,0.34)",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#515151",
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    color: "#000000",
    textAlign: "center",
    marginTop: 20,
  },
  footerTextBold: {
    fontWeight: "bold",
  },
});
