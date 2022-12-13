import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  editText: {
    fontSize: 18,
    color: colors.blue,
  },
  addIcon: {
    width: 20,
    height: 20,
  },
});
