import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const imageBackground = () => {

  return (
    <ImageBackground source={image} resizeMode="cover" style={style.image}>
        <Text style={style.heading}>ImageBackground</Text>
        <Text style={style.text}>A common feature request from developers familiar with the web is background-image.
          To handle this use case,
          you can use the &lt;ImageBackground&gt; component, which has the same props as &lt;Image&gt;,
          and add whatever children to it you would like to layer on top of it.

          You might not want to use &lt;ImageBackground&gt; in some cases, since the implementation is basic.
          Refer to &lt;ImageBackground&gt;'s source code for more insight,
          and create your own custom component when needed.</Text>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: 'center'
  },
  heading: {
    fontSize: 23,
    marginHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 25,
    padding: 20,
    color: "white",
    backgroundColor: '#000000c0',
  },
  text: {
    color: "white",
    marginHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: '#000000c0',
    padding: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});


export default imageBackground