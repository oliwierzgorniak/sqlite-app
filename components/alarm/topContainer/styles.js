import { StyleSheet } from "react-native";

export const timeFontSize = 35;

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeInfoContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  timeText: {
    fontSize: timeFontSize,
    marginRight: 3,
  },
  infoContainer: {
    height: timeFontSize,
  },
  iconsContainer: {
    height: 10,
    flexDirection: "row",
  },
  iconContainer: {
    marginRight: 4,
  },
  icon: {
    height: 10,
    width: 10,
  },
  switch: {
    marginRight: -8,
  },
});
