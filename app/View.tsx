import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ViewComp = () => {
    return (
        <View style={style.container}>
            <Text style={style.heading}>View</Text>
            <Text style={style.text}>The most fundamental component for building a UI, View is a container that supports
                layout with flexbox, style, some touch handling, and accessibility controls.
                View maps directly to the native view equivalent on whatever platform React Native
                is running on, whether that is a UIView, &lt;div&gt;, android.view, etc.
            </Text>
            <Text style={style.text}>View is designed to be nested inside other views and can have 0
                to many children of any type.
            </Text>
            <Text style={style.text}>This example creates a View that wraps two boxes with color and a text
                component in a row with padding.
            </Text>
            <View style={{ backgroundColor: 'blue', flex: 0.2 }} />
            <View style={{ backgroundColor: 'red', flex: 0.4 }} />
            <Text>Hello World!</Text>
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
});

export default ViewComp