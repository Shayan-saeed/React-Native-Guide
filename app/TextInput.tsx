import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const TextInputComp = () => {

    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');

    return (
        <View style={style.container}>
            <Text style={style.heading}>TextInput</Text>
            <Text style={style.text}>A foundational component for inputting text into the app via a keyboard.
                Props provide configurability for several features, such as auto-correction,
                auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
            </Text>
            <Text style={style.text}>The most basic use case is to plop down a TextInput and subscribe to the
                onChangeText events to read the user input. There are also other events,
                such as onSubmitEditing and onFocus that can be subscribed to. A minimal example:
            </Text>
            <TextInput
                style={style.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                style={style.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                placeholderTextColor='black'
                keyboardType="numeric"
            />
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 10
    },
});


export default TextInputComp