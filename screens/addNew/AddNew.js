import { View, Text, TouchableOpacity } from "react-native";

import handleButton from "./js/handleButton";
import {hoursAm} from '../../global';

import styles from "./styles";
import PlusSvg from "../../assets/plus-white.svg";
import HoursSelection from "../../components/hoursSelection/HoursSelection";

export default ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        00 : 00
      </Text>
      <HoursSelection />
      <TouchableOpacity
        onPress={() => handleButton("00:00", navigation.goBack)}
        style={styles.addButton}
      >
        <PlusSvg width={styles.icon.width} height={styles.icon.height} />
      </TouchableOpacity>
    </View>
  );
};
