import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import React, { useState } from 'react'

const TouchableWithoutFeedbackComp = () => {
    const [count, setCount] = useState(0);

    const onPress = () => {
        setCount(count + 1);
    };
    return (
        <View style={style.container}>
            <Text style={style.heading}>TouchableWithoutFeedback</Text>
            <Text style={style.text}>Do not use unless you have a very good reason. All elements that respond to press
                should have a visual feedback when touched.
            </Text>
            <Text style={style.text}>TouchableWithoutFeedback supports only one child. If you wish to have several
                child components, wrap them in a View. Importantly, TouchableWithoutFeedback works
                by cloning its child and applying responder props to it.
                It is therefore required that any intermediary components pass through
                those props to the underlying React Native component.
            </Text>
            <View style={style.countContainer}>
                <Text style={style.countText}>Count: {count}</Text>
            </View>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={style.button}>
                    <Text>Touch Here</Text>
                </View>
            </TouchableWithoutFeedback>
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


export default TouchableWithoutFeedbackComp