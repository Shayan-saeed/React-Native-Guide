import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ScrollViewComp = () => {
    return (
        <ScrollView>
            <View style={style.container}>
                <Text style={style.heading}>ScrollView</Text>
                <Text style={style.text}>Component that wraps platform ScrollView while providing
                    integration with touch locking "responder" system.
                </Text>
                <Text style={style.text}>Keep in mind that ScrollViews must have a bounded height in order to work,
                    since they contain unbounded-height children into a bounded container (via a scroll interaction).
                    In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height. Forgetting to transfer flex: 1 down the view stack can lead to errors here,
                    which the element inspector makes quick to debug.
                </Text>
                <Text style={style.text}>Doesn't yet support other contained responders
                    from blocking this scroll view from becoming the responder.
                </Text>
                <Text style={style.text}>
                    &lt;ScrollView&gt; vs &lt;FlatList&gt; - which one to use?
                </Text>
                <Text style={style.text}>
                    ScrollView renders all its react child components at once, but this has a performance downside.
                </Text>
                <Text style={style.text}>
                    Imagine you have a very long list of items you want to display, maybe several screens worth of content.
                    Creating JS components and native views for everything all at once, much of which may not even be shown,
                    will contribute to slow rendering and increased memory usage.
                </Text>
                <Text style={style.text}>
                    This is where FlatList comes into play. FlatList renders items lazily, when they are about to appear,
                    and removes items that scroll way off screen to save memory and processing time.
                </Text>
                <Text style={style.text}>FlatList is also handy if you want to render separators between your items, multiple columns,
                    infinite scroll loading, or any number of other features it supports out of the box.
                </Text>
                <Text style={style.texts}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
        </ScrollView>
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
    texts: {
        color: "white",
        marginHorizontal: 15,
        paddingBottom: 15,
        fontSize: 30,
    },
    contentView: {
        marginTop: 30,
        padding: 20,
    },
    innerView: {
        paddingBottom: 25,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default ScrollViewComp