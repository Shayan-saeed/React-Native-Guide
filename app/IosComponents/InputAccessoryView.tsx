import React, { useState } from 'react';
import {
    Button,
    InputAccessoryView,
    ScrollView,
    TextInput,
    StyleSheet,
    View,
    Text,
} from 'react-native';

const inputAccessoryViewID = 'uniqueID';
const initialText = '';

export default function InputAccessoryViewComp() {
    const [text, setText] = useState(initialText);

    return (
        <View style={style.container}>
            <Text style={style.heading}>InputAccessoryView</Text>
            <Text style={style.text}>A component which enables customization of the keyboard input accessory view on iOS.
                The input accessory view is displayed above the keyboard whenever a TextInput has focus.
                This component can be used to create custom toolbars.
            </Text>
            <Text style={style.text}>To use this component wrap your custom toolbar with the InputAccessoryView component,
                and set a nativeID. Then, pass that nativeID as the inputAccessoryViewID of whatever
                TextInput you desire. A basic example:
            </Text>
            <ScrollView keyboardDismissMode="interactive">
                <TextInput
                    style={style.textInput}
                    inputAccessoryViewID={inputAccessoryViewID}
                    onChangeText={setText}
                    value={text}
                    placeholder={'Please type here…'}
                />
            </ScrollView>
            <InputAccessoryView nativeID={inputAccessoryViewID}>
                <Button onPress={() => setText(initialText)} title="Clear text" />
            </InputAccessoryView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        paddingHorizontal: 20,
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
    textInput: {
        padding: 16,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white'
    },
});
