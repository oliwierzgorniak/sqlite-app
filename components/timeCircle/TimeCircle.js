import { TouchableNativeFeedback, View, Text } from "react-native";

import getLeft from './js/getLeft';
import getTop from './js/getTop';

import styles from './styles';
import {rippleEffect} from '../../global';
import colors from '../../styles/colors';

export default function TimeCircle({elements, isInner = false}) {
    const containerWidth = isInner ? 200 : 300;
    const buttonWidthHeight = isInner ? 30 : 40;
    const fontSize = isInner ? 15 : 20;
    // const buttonColor = isInner ? colors.grayLight : colors.blue;


    return <View style={{...styles.container, width: containerWidth }}> 
        {
            elements.map((el, i) => (
                <View style={{...styles.buttonContainer, top: getTop(i, containerWidth, buttonWidthHeight), left: getLeft(i, containerWidth, buttonWidthHeight), width: buttonWidthHeight, height: buttonWidthHeight, fontSize: fontSize }} key={isInner ? 'inner' + i : i}>
                    <TouchableNativeFeedback background={rippleEffect}>
                        <Text style={styles.buttonText}>{el}</Text>
                    </TouchableNativeFeedback>
                </View>
            ))
        }
    </View>
}