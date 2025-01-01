import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

const StatusBarComp = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0]
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };
  return (
    <View style={style.container}>
      <Text style={style.heading}>StatusBar</Text>
      <Text style={style.text}>
        Component to control the app's status bar. The status bar is the zone,
        typically at the top of the screen, that displays the current time,
        Wi-Fi and cellular network information, battery level and/or other
        status icons.
      </Text>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <Text style={style.textStyle}>
        StatusBar Visibility:{"\n"}
        {hidden ? "Hidden" : "Visible"}
      </Text>
      <Text style={style.textStyle}>
        StatusBar Style:{"\n"}
        {statusBarStyle}
      </Text>
      {Platform.OS === "ios" ? (
        <Text style={style.textStyle}>
          StatusBar Transition:{"\n"}
          {statusBarTransition}
        </Text>
      ) : null}
      <View style={style.buttonsContainer}>
        <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
        <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
        {Platform.OS === "ios" ? (
          <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition}
          />
        ) : null}
      </View>
    </View>
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
  title: {
    fontSize: 32,
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: "center",
    marginBottom: 8,
  },
});

export default StatusBarComp;
