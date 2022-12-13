import { StyleSheet } from "react-native";

export const circleRadius = 150;

export default StyleSheet.create({
    container: {
        width: circleRadius * 2,
        aspectRatio: 1,
        backgroundColor: 'red',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
});