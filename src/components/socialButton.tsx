import { Ionicons } from "@expo/vector-icons"; // Para o ícone de "telefone/email"
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface SocialButtonProps extends TouchableOpacityProps {
  type: "google" | "facebook" | "apple" | "email";
  onPress: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  type,
  onPress,
  ...rest
}) => {
  let iconComponent;
  let buttonStyle;

  switch (type) {
    case "google":
      iconComponent = (
        <Image
          source={require("../../assets/images/icons/google-icon.png")}
          style={styles.icon}
        />
      );
      buttonStyle = styles.googleButton;
      break;
    case "facebook":
      iconComponent = (
        <Ionicons name="logo-facebook" size={24} color="#1877F2" />
      );
      buttonStyle = styles.facebookButton;
      break;
    case "apple":
      iconComponent = <Ionicons name="logo-apple" size={24} color="#000" />;
      buttonStyle = styles.appleButton;
      break;
    case "email": // Usaremos Ionicons para um ícone genérico de "login"
      iconComponent = <Ionicons name="mail" size={24} color="#6A1B9A" />;
      buttonStyle = styles.emailButton;
      break;
  }

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      {...rest}
    >
      {iconComponent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60, // Tamanho fixo para botões redondos
    height: 45,
    borderRadius: 10, // Metade da largura/altura para ser um círculo
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  googleButton: {
    backgroundColor: "#FFFFFF",
  },
  facebookButton: {
    backgroundColor: "#FFFFFF",
  },
  appleButton: {
    backgroundColor: "#FFFFFF",
  },
  emailButton: {
    backgroundColor: "#FFFFFF",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default SocialButton;
