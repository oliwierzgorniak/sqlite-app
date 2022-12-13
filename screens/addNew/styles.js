import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  time: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 40,
  },
  addButton: {
    backgroundColor: colors.blue,
    borderRadius: 4000,
    padding: 20,
    rippleEffect: "rgb(255, 255, 255, 1)",
  },
  icon: {
    width: 50,
    height: 50,
  },
});
