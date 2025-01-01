import { View, Text, StyleSheet } from 'react-native';

export default function Tab1() {
  return (
    <View style={style.container}>
      <Text style={style.heading}>DrawerLayoutAndroid</Text>
      <Text style={style.text}>React component that wraps the platform DrawerLayout (Android only).
        The Drawer (typically used for navigation) is rendered with renderNavigationView and direct
        children are the main view (where your content goes). The navigation view is initially not
        visible on the screen, but can be pulled in from the side of the window specified by the
        drawerPosition prop and its width can be set by the drawerWidth prop.
      </Text>
    </View>
  );
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