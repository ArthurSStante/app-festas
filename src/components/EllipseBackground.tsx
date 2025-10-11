import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function EllipseBackground() {
  return (
    <View style={styles.backgroundContainer}>
      <Image
        source={require("../../assets/images/Ellipse-82.png")}
        style={styles.angularEllipse78}

      />
      <Image
        source={require("../../assets/images/Ellipse-75.png")}
        style={styles.angularEllipse75}
      />
      <Image
        source={require("../../assets/images/Ellipse-76.png")}
        style={styles.angularEllipse76}
      />
      <Image
        source={require("../../assets/images/Ellipse-77.png")}
        style={styles.angularEllipse77}
      />
      <Image
        source={require("../../assets/images/Ellipse-79.png")}
        style={styles.angularEllipse79}
      />
      {/* <Image
        source={require("../../assets/images/teste1.png")}
        style={styles.teste}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject, // Faz o container ocupar a tela inteira
    overflow: "hidden",
  },
  // teste:{
  //   position: 'absolute',
  //   width: 865.07,
  //   height: 1322.34,
  //   top: -239.34,
  //   left: -327.57,
  // },
  angularEllipse78: {
    position: "absolute",
    width: 802.5,
    height: 580,
    top: 503,
    left: -265,
  },
  angularEllipse75: {
    position: "absolute",
    width: 365,
    height: 221,
    top: -69, //y
    left: 172, //x
  },
  angularEllipse76: {
    position: "absolute",
    width: 738.18,
    height: 690.33,
    top: -29.68, //y
    left: -327.57, //x
  },
  angularEllipse77: {
    position: "absolute",
    width: 690.86,
    height: 621.84,
    top: -239.34,
    left: -187.36,
  },
  angularEllipse79: {
    position: "absolute",
    width: 708.5,
    height: 699.06,
    top: -61,
    left: -257,
  },
});
