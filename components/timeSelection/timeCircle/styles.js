import { StyleSheet } from "react-native";

const circleRadius = 150;
const buttonWidthHeight = 40;

export default StyleSheet.create({
  container: {
    width: circleRadius * 2,
    aspectRatio: 1,
    marginBottom: 20,
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    width: buttonWidthHeight,
    height: buttonWidthHeight,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4000,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
});
