import { View, Text, StyleSheet, SectionList } from 'react-native'
import React from 'react'

const SectionListComp = () => {
    const data = [
        {
            id: 0,
            text: "Fully cross-platform.",
        },
        {
            id: 1,
            text: "Configurable viewability callbacks.",
        },
        {
            id: 2,
            text: "List header support.",
        },
        {
            id: 3,
            text: "List footer support.",
        },
        {
            id: 4,
            text: "Item separator support.",
        },
        {
            id: 5,
            text: "Section header support.",
        },
        {
            id: 6,
            text: "Section separator support.",
        },
        {
            id: 7,
            text: "Heterogeneous data and item rendering support.",
        },
        {
            id: 9,
            text: "Pull to Refresh.",
        },
        {
            id: 10,
            text: "Scroll loading."
        },
    ];

    const DATA = [
        {
            title: 'Main dishes',
            data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
            title: 'Sides',
            data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
            title: 'Drinks',
            data: ['Water', 'Coke', 'Beer'],
        },
        {
            title: 'Desserts',
            data: ['Cheese Cake', 'Ice Cream'],
        },
    ];
    return (
        <View style={style.container}>
            <Text style={style.heading}>SectionList</Text>
            <Text style={style.text}>A performant interface for rendering sectioned lists, supporting the most handy features:</Text>
            {data.map((item) => (
                <View style={{ flexDirection: "row" }} key={item.id}>
                    <Text style={style.text}>{"\u2022"}</Text>
                    <Text style={style.text}>{item.text}</Text>
                </View>
            ))}
            <Text style={style.text}>If you don't need section support and want a simpler interface, use &lt;FlatList&gt;.</Text>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={style.item}>
                        <Text style={style.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={style.header}>{title}</Text>
                )}
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
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});



export default SectionListComp