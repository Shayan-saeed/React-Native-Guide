import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

const activityIndicator = () => {
    return (
        <View
            style={{
                backgroundColor: 'black',
                flex: 1
            }}
        >
            <Text style={style.heading}>Activity Indicator</Text>
            <Text style={style.text}>Displays a circular loading indicator.</Text>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flex: 2,
                }}
            >
                <ActivityIndicator size='small' />
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    heading: {
        fontSize: 23,
        marginHorizontal: 15,
        paddingBottom: 15,
        paddingTop: 25,
        color: 'white'
    },
    text: {
        color: 'white',
        marginHorizontal: 15,
    }
})
export default activityIndicator