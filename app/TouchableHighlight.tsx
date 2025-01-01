import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'

const TouchableHighlightComp = () => {

    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);

    return (
        <View style={style.container}>
            <Text style={style.heading}>TouchableHighlight</Text>
            <Text style={style.text}>A wrapper for making views respond properly to touches. On press down,
                the opacity of the wrapped view is decreased, which allows the underlay color to show through,
                darkening or tinting the view.
            </Text>
            <Text style={style.text}>The underlay comes from wrapping the child in a new View, which can affect layout,
                and sometimes cause unwanted visual artifacts if not used correctly, for example if the
                backgroundColor of the wrapped view isn't explicitly set to an opaque color.
            </Text>
            <Text style={style.text}>TouchableHighlight must have one child (not zero or more than one).
                If you wish to have several child components, wrap them in a View.
            </Text>
            <TouchableHighlight onPress={onPress}>
                <View style={style.button}>
                    <Text>Touch Here</Text>
                </View>
            </TouchableHighlight>
            <View style={style.countContainer}>
                <Text style={style.countText}>{count || null}</Text>
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
    countText: {
        color: '#FF00FF',
    },
});

export default TouchableHighlightComp