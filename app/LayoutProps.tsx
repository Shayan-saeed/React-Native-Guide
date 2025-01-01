import React, { useState } from 'react'
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlexAlignType,
    FlexStyle
} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function LayoutProps() {
    const [flexDirection, setFlexDirection] = useState(0)
    const [justifyContent, setJustifyContent] = useState(0);
    const [alignItems, setAlignItems] = useState(0);
    const [direction, setDirection] = useState(0);
    const [wrap, setWrap] = useState(0);

    const [squares, setSquares] = useState([<Square />, <Square />, <Square />]);

    const hookedStyles = {
        flexDirection: flexDirections[flexDirection],
        justifyContent: justifyContents[justifyContent],
        alignItems: alignItemsArr[alignItems],
        direction: directions[direction],
        flexWrap: wraps[wrap],
    } as FlexStyle;

    const changeSetting = (
        value: number,
        options: any[],
        setterFunction: (index: number) => void,
    ) => {
        if (value === options.length - 1) {
            setterFunction(0);
            return;
        }
        setterFunction(value + 1);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={[styles.container, styles.playingSpace, hookedStyles]}>
                    {squares.map(elem => elem)}
                </View>
                <ScrollView style={styles.layoutContainer}>
                    <View style={styles.controlSpace}>
                        <View style={styles.buttonView}>
                            <Button
                                title="Change Flex Direction"
                                onPress={() =>
                                    changeSetting(flexDirection, flexDirections, setFlexDirection)
                                }
                            />
                            <Text style={styles.text}>{flexDirections[flexDirection]}</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                title="Change Justify Content"
                                onPress={() =>
                                    changeSetting(
                                        justifyContent,
                                        justifyContents,
                                        setJustifyContent,
                                    )
                                }
                            />
                            <Text style={styles.text}>{justifyContents[justifyContent]}</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                title="Change Align Items"
                                onPress={() =>
                                    changeSetting(alignItems, alignItemsArr, setAlignItems)
                                }
                            />
                            <Text style={styles.text}>{alignItemsArr[alignItems]}</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                title="Change Direction"
                                onPress={() =>
                                    changeSetting(direction, directions, setDirection)
                                }
                            />
                            <Text style={styles.text}>{directions[direction]}</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                title="Change Flex Wrap"
                                onPress={() => changeSetting(wrap, wraps, setWrap)}
                            />
                            <Text style={styles.text}>{wraps[wrap]}</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                title="Add Square"
                                onPress={() => setSquares([...squares, <Square />])}
                            />
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                title="Delete Square"
                                onPress={() =>
                                    setSquares(squares.filter((v, i) => i !== squares.length - 1))
                                }
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const flexDirections = [
    'row',
    'row-reverse',
    'column',
    'column-reverse',
] as FlexStyle['flexDirection'][];
const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
] as FlexStyle['justifyContent'][];
const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
] as FlexAlignType[];
const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
const directions = ['inherit', 'ltr', 'rtl'];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    layoutContainer: {
        flex: 0.5,
    },
    playingSpace: {
        backgroundColor: 'black',
        borderColor: 'blue',
        borderWidth: 3,
        overflow: 'hidden',
    },
    controlSpace: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    buttonView: {
        width: '50%',
        padding: 10,
    },
    text: {
        textAlign: 'center',
        color: 'white'
    },
});

const Square = () => (
    <View
        style={{
            width: 50,
            height: 50,
            backgroundColor: randomHexColor(),
        }}
    />
);

const randomHexColor = () => {
    return '#000000'.replace(/0/g, () => {
        return Math.round(Math.random() * 14).toString(16);
    });
};

