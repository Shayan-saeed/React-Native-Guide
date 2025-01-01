import { View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import React from 'react'

const getItem = (_data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
});

const getItemCount = _data => 50;

const Item = ({ title }) => (
    <View style={style.item}>
        <Text style={style.title}>{title}</Text>
    </View>
);

const VirtualizedListComp = () => {
    return (
        <View style={style.container}>
            <Text style={style.heading}>VirtualizedList</Text>
            <Text style={style.text}>Base implementation for the more convenient &lt;FlatList&gt; and &lt;SectionList&gt; components,
                which are also better documented. In general, this should only really be used if you
                need more flexibility than FlatList provides, e.g. for use with immutable data instead
                of plain arrays.
            </Text>
            <Text style={style.text}>Virtualization massively improves memory consumption and performance of large lists
                by maintaining a finite render window of active items and replacing all items outside
                of the render window with appropriately sized blank space. The window adapts to scrolling
                behavior, and items are rendered incrementally with low-pri
                (after any running interactions) if they are far from the visible area,
                or with hi-pri otherwise to minimize the potential of seeing blank space.
            </Text>
            <VirtualizedList
                initialNumToRender={4}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
                getItemCount={getItemCount}
                getItem={getItem}
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
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
});

export default VirtualizedListComp