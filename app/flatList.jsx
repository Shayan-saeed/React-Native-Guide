import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const flatList = () => {
  const data = [
    {
      id: 0,
      text: "Fully cross-platform.",
    },
    {
      id: 1,
      text: "Optional horizontal mode.",
    },
    {
      id: 2,
      text: "Header support.",
    },
    {
      id: 3,
      text: "Footer support.",
    },
    {
      id: 4,
      text: "Separator support.",
    },
    {
      id: 5,
      text: "Pull to Refresh.",
    },
    {
      id: 6,
      text: "Scroll loading.",
    },
    {
      id: 7,
      text: "ScrollToIndex support.",
    },
    {
      id: 9,
      text: "Multiple column support.",
    },
  ];

  const FlatListData = [
    {
      id: "11111",
      title: "First Item",
    },
    {
      id: "11112",
      title: "Second Item",
    },
    {
      id: "11113",
      title: "Third Item",
    },
    {
      id: "11114",
      title: "Fourth Item",
    },
    {
      id: "11115",
      title: "Fifth Item",
    },
    {
      id: "11116",
      title: "Sixth Item",
    },
    {
      id: "11117",
      title: "Seventh Item",
    },
  ];

  const Item = ({ title }) => (
    <View style={style.item}>
      <Text style={style.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[style.container, { flex: 1 }]}>
        <View style={{ flex: 1 }}>
          <Text style={style.heading}>FlatList</Text>
          <Text style={style.text}>
            A performant interface for rendering basic, flat lists, supporting
            the most handy features:
          </Text>
          {data.map((item) => (
            <View style={{ flexDirection: "row" }} key={item.id}>
              <Text style={style.text}>{"\u2022"}</Text>
              <Text style={style.text}>{item.text}</Text>
            </View>
          ))}
          <FlatList
            data={FlatListData}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
            style={{ flexGrow: 0 }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

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

export default flatList;
