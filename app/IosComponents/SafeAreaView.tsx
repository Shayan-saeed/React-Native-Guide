import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function SafeAreaViewComp() {
    return (
        <SafeAreaView style={style.container}>
            <View>
                <Text style={style.heading}>SafeAreaView</Text>
                <Text style={style.text}>The purpose of SafeAreaView is to render content within the safe area boundaries of a
                    device. It is currently only applicable to iOS devices with iOS version 11 or later.
                </Text>
                <Text style={style.text}>SafeAreaView renders nested content and automatically applies padding to reflect the
                    portion of the view that is not covered by navigation bars, tab bars, toolbars, and
                    other ancestor views. Moreover, and most importantly, Safe Area's paddings reflect
                    the physical limitation of the screen, such as rounded corners or camera notches
                    (i.e. the sensor housing area on iPhone 13).
                </Text>
            </View>
        </SafeAreaView>
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
});
