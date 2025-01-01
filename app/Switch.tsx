import React, {useState} from 'react';
import {Switch, StyleSheet, View, Text} from 'react-native';

const SwitchComp = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={style.container}>
      <Text style={style.heading}>Switch</Text>
      <Text style={style.text}>Renders a boolean input.</Text>
      <Text style={style.text}>This is a controlled component that requires an onValueChange callback that updates the
        value prop in order for the component to reflect user actions. If the value prop is not updated,
        the component will continue to render the supplied value prop instead of the expected result
        of any user actions.
      </Text>
      <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: 'center',
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
});

export default SwitchComp