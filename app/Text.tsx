import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const TextComp = () => {

  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <View style={style.container}>
      <Text style={style.heading}>Text</Text>
      <Text style={style.text}>A React component for displaying text.</Text>
      <Text style={style.text}>Text supports nesting, styling, and touch handling.</Text>
      <Text style={style.text}>In the following example, the nested title and body text will inherit the fontFamily from
        styles.baseText, but the title provides its own additional styles.
        The title and body will stack on top of each other on account of the literal newlines:
      </Text>
      <Text style={[style.baseText, style.text]}>
        <Text style={[style.titleText, style.text]} onPress={onPressTitle}>
          {titleText}
          {'\n'}
          {'\n'}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
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
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextComp