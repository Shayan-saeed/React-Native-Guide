import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'

const TouchableOpacityComp = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return (
        <View style={style.container}>
            <Text style={style.heading}>TouchableOpacity</Text>
            <Text style={style.text}>A wrapper for making views respond properly to touches. On press down,
                the opacity of the wrapped view is decreased, dimming it.
            </Text>
            <Text style={style.text}>Opacity is controlled by wrapping the children in an Animated.View,
                which is added to the view hierarchy. Be aware that this can affect layout.
            </Text>
            <View style={style.countContainer}>
                <Text style={style.text}>Count: {count}</Text>
            </View>
            <TouchableOpacity style={style.button} onPress={onPress}>
                <Text>Press Here</Text>
            </TouchableOpacity>
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
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 15,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
});

export default TouchableOpacityComp