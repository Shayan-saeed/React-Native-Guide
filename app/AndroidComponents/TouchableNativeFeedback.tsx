import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import React, { useState } from 'react';

const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return Math.round(Math.random() * 16).toString(16);
  });
};
export default function Tab2() {
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);

  return (
    <View style={style.container}>
      <Text style={style.heading}>TouchableNativeFeedback</Text>
      <Text style={style.text}>A wrapper for making views respond properly to touches (Android only).
        On Android this component uses native state drawable to display touch feedback.
      </Text>
      <Text style={style.text}>
        At the moment it only supports having a single View instance as a child node,
        as it's implemented by replacing that View with another instance of RCTView node with
        some additional properties set.
      </Text>
      <Text style={style.text}>
        Background drawable of native feedback touchable can be customized with background property.
      </Text>
      <TouchableNativeFeedback
        onPress={() => {
          setRippleColor(randomHexColor());
          setRippleOverflow(!rippleOverflow);
        }}
        background={TouchableNativeFeedback.Ripple(
          rippleColor,
          rippleOverflow,
        )}>
        <View style={style.touchable}>
          <Text style={style.text}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingHorizontal: 20,
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
    alignSelf: 'center',
  },
  touchable: {
    flex: 0.33,
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    borderColor: 'black',
    borderWidth: 1,
  },

});
