import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";

export default StyleSheet.create({
  container: {
    // padding: 5,
    borderColor: colors.gray,
    borderWidth: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    color: colors.white,
  },
});
