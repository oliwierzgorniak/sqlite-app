import { View, TouchableOpacity, Text } from "react-native";
import { useSelector } from "react-redux";

import store from "../../redux/store.js";
import { toggleIsEditMode } from "../../redux/reducers/isEditModeReducer.js";

import styles from "./styles.js";
import PlusSvg from "../../assets/plus.svg";
import handleAddButton from "./js/handleAddButton.js";

export default ({ navigate }) => {
  let isEditMode = useSelector((state) => state.isEditMode.value);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => store.dispatch(toggleIsEditMode())}>
        <Text style={styles.editText}>{isEditMode ? "Cancel" : "Edit"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAddButton(navigate)}>
        <PlusSvg width={styles.addIcon.width} height={styles.addIcon.height} />
      </TouchableOpacity>
    </View>
  );
};
