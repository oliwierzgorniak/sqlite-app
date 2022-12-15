import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  timeContainer: {
    marginBottom: 40,
    flexDirection: "row",
  },
  timeButton: {},
  time: {
    fontSize: 70,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: colors.green,
    borderRadius: 4000,
    padding: 20,
    rippleEffect: "rgb(255, 255, 255, 1)",
  },
  icon: {
    width: 50,
    height: 50,
  },
});
