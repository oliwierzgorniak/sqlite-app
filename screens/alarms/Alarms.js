import { useEffect } from "react";
import { View, ScrollView } from "react-native";

import { useSelector } from "react-redux";

import Alarm from "../../components/alarm/Alarm";
import TopButtons from "../../components/topButtons/TopButtons";
import getAndSetAlarms from "./js/getAndSetAlarms";

import styles from "./styles";

// BACKGROUND
// import Background from "./js/background/Background";
// async function defineTask() {
//   await Background.handleLoadingSound();
//   Background.defineTask();
//   await Background.registerTask();
// }
// defineTask();

export default ({ navigation }) => {
  const alarms = useSelector((state) => state.alarms.value);

  useEffect(() => {
    getAndSetAlarms();
  }, []);

  return (
    <View style={styles.container}>
      <TopButtons navigate={navigation.navigate} />
      <ScrollView style={styles.alarmsContainer}>
        {alarms.map((a) => (
          <Alarm alarmId={a.id} key={a.id} />
        ))}
      </ScrollView>
    </View>
  );
};
