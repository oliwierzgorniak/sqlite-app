import { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";

import { useSelector } from "react-redux";

import Alarm from "../../components/alarm/Alarm";
import TopButtons from "../../components/topButtons/TopButtons";
import Background from "./js/background/Background";
import getAndSetAlarms from "./js/getAndSetAlarms";

import styles from "./styles";

async function defineTask() {
  await Background.handleLoadingSound();
  Background.defineTask();
  await Background.registerTask();
}

defineTask();

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
