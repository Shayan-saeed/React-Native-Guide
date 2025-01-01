import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import React from 'react'

const button = () => {
  return (
    <View
      style={style.container}
    >
      <Text style={style.heading}>Button</Text>
      <Text style={style.text}>A basic button component that should render nicely on any platform.
        Supports a minimal level of customization.
      </Text>
      <View style={style.contentView}>
        <View style={style.innerView}>
          <Text style={style.text}>The title and onPress handler are required.
            It is recommended to set accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button title='Press me' onPress={() => Alert.alert('Simple Button Pressed')} />
        </View>
        <View style={style.innerView}>
          <Text style={style.text}>Adjust the color in a way that looks standard on each platform. On iOS, the color prop
            controls the color of the text. 
            On Android, the color adjusts the background color of the button.
          </Text>
          <Button title='Press me' color="#f194ff" onPress={() => Alert.alert('Simple Button Pressed')} />
        </View>
        <View style={style.innerView}>
          <Text style={style.text}>The title and onPress handler are required.
            It is recommended to set accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button title='Press me' disabled onPress={() => Alert.alert('Simple Button Pressed')} />
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
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
    paddingBottom: 15,
  },
  contentView: {
    marginTop: 30,
    padding: 20,
  },
  innerView: {
    paddingBottom: 25 ,
  }
})

export default button