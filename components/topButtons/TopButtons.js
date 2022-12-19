import { View, Text, TouchableNativeFeedback } from "react-native";
import { useSelector } from "react-redux";

import store from "../../redux/store.js";
import { toggleIsEditMode } from "../../redux/reducers/isEditModeReducer.js";

import styles from "./styles.js";
import PlusSvg from "../../assets/plus.svg";
import handleAddButton from "./js/handleAddButton.js";
import { rippleEffect } from "../../js/global";

export default ({ navigate }) => {
  let isEditMode = useSelector((state) => state.isEditMode.value);

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={rippleEffect}
        onPress={() => store.dispatch(toggleIsEditMode())}
      >
        <View>
          <Text style={styles.editText}>{isEditMode ? "Cancel" : "Edit"}</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        background={rippleEffect}
        onPress={() => handleAddButton(navigate)}
      >
        <View>
          <PlusSvg
            width={styles.addIcon.width}
            height={styles.addIcon.height}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
