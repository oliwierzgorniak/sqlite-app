import { closeAllDays } from "../../../redux/reducers/alarmsReducer";
import { Animated } from "react-native";
import store from "../../../redux/store";

export default function handleAddButton(navigate) {
  navigate("Add new");
  store.dispatch(closeAllDays());
}
