import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

const image = () => {
  return (
    <View style={style.container}>
      <Text style={style.heading}>Image</Text>
      <Text style={style.text}>A React component for displaying different types of images, including network images,
        static resources, temporary local images,
        and images from local disk, such as the camera roll.

        This example shows fetching and displaying an image from local storage as well as one from
        network and even from data provided in the 'data:' uri scheme.
      </Text>
      <View
        style={style.contentView}
      >
        <Image 
          style={style.logo}
          source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
        />
        <Image 
          source={require('../assets/images/react-logo.png')}
        />
      </View>
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
  contentView: {
    marginTop: 30,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
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
  logo: {
    width: 66,
    height: 58,
  },
});

export default image