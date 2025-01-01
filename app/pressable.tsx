import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const pressable = () => {
    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = ''
    if (timesPressed > 0) {
        textLog = timesPressed + 'x Pressed'
    } else if (timesPressed > 0) {
        textLog = 'onPress'
    }

    return (
        <View style={style.container}>
            <Text style={style.heading}>Pressable</Text>
            <Text style={style.text}>Pressable is a Core Component wrapper that can detect various stages of press
                interactions on any of its defined children.
            </Text>
            <Pressable
                onPress={() => {
                    setTimesPressed(current => current + 1)
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                        marginInline: 20
                    },
                    style.wrapperCustom,
                ]}
            >
                {({ pressed }) => (
                    <Text style={[style.text, {color: 'black'}]}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
                )}
            </Pressable>
            <View style={style.logBox}>
                <Text testID="pressable_press_console">{textLog}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    heading: {
        fontSize: 23,
        marginHorizontal: 15,
        paddingBottom: 15,
        paddingTop: 25,
        color: "white",
    },
    text: {
        color: "white",
        marginHorizontal: 15,
        paddingBottom: 15,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
      },
});

export default pressable