import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    Button
} from 'react-native'
import React from 'react'

const keyboardAvoidingView = () => {
    return (
        <View style={style.container}>
            <Text style={style.heading}>KeyboardAvoidingView</Text>
            <Text style={style.text}>This component will automatically adjust its height, position, or bottom padding based
                on the keyboard height to remain
                visible while the virtual keyboard is displayed.
            </Text>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={style.heading}>Header</Text>
                        <TextInput placeholder='Enter your username' placeholderTextColor='grey' style={style.textInput} />
                        <View style={style.btnContainer}>
                            <Button title="Submit" onPress={() => null} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View >
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
    title: {
        fontSize: 32,
    },
    textInput: {
        height: 40,
        color: 'white',
        borderColor: '#FFFFFF',
        borderBottomWidth: 1,
        marginBottom: 36,
        marginInline: 10,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});

export default keyboardAvoidingView