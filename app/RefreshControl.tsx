import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback } from 'react'

const RefreshControlComp = () => {

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, []);


    return (
        <View style={style.container}>
            <ScrollView
                contentContainerStyle={style.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >

                <Text style={style.heading}>RefreshControl</Text>
                <Text style={style.text}>This component is used inside a ScrollView or ListView to add pull to refresh functionality.
                    When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.
                </Text>
                <Text style={style.text}>Pull down to see RefreshControl indicator</Text>
            </ScrollView>
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
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default RefreshControlComp