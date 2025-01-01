import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#07bbed'
          },
          headerTintColor: '#fff'
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Overview",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="activityIndicator"
          options={{
            drawerLabel: "ActivityIndicator",
            title: "Activity Indicator",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="button"
          options={{
            drawerLabel: "Button",
            title: "Button",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="flatList"
          options={{
            drawerLabel: "FlatList",
            title: "FlatList",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="image"
          options={{
            drawerLabel: "Image",
            title: "Image",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="imageBackground"
          options={{
            drawerLabel: "ImageBackground",
            title: "Background Image",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="keyboardAvoidingView"
          options={{
            drawerLabel: "KeyboardAvoidingView",
            title: "KeyboardAvoidingView",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="modal"
          options={{
            drawerLabel: "Modal",
            title: "Modal",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="pressable"
          options={{
            drawerLabel: "Pressable",
            title: "Pressable",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="RefreshControl"
          options={{
            drawerLabel: "RefreshControl",
            title: "RefreshControl",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="ScrollView"
          options={{
            drawerLabel: "ScrollView",
            title: "ScrollView",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="SectionList"
          options={{
            drawerLabel: "SectionList",
            title: "SectionList",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="StatusBar"
          options={{
            drawerLabel: "StatusBar",
            title: "StatusBar",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="Switch"
          options={{
            drawerLabel: "Switch",
            title: "Switch",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="Text"
          options={{
            drawerLabel: "Text",
            title: "Text",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="TextInput"
          options={{
            drawerLabel: "TextInput",
            title: "TextInput",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="TouchableHighlight"
          options={{
            drawerLabel: "TouchableHighlight",
            title: "TouchableHighlight",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="TouchableOpacity"
          options={{
            drawerLabel: "TouchableOpacity",
            title: "TouchableOpacity",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="TouchableWithoutFeedback"
          options={{
            drawerLabel: "TouchableWithoutFeedback",
            title: "TouchableWithoutFeedback",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="View"
          options={{
            drawerLabel: "View",
            title: "View",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="VirtualizedList"
          options={{
            drawerLabel: "VirtualizedList",
            title: "VirtualizedList",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="AndroidComponents"
          options={{
            drawerLabel: "Android Components",
            title: "Android Components",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="IosComponents"
          options={{
            drawerLabel: "IOS Components",
            title: "IOS Components",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="ImageStyleProps"
          options={{
            drawerLabel: "Image Style Props",
            title: "Image Style Props",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="LayoutProps"
          options={{
            drawerLabel: "Layout Props",
            title: "Layout Props",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="ShadowProps"
          options={{
            drawerLabel: "Shadow Props",
            title: "Shadow Props",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="TextStyleProps"
          options={{
            drawerLabel: "Text Style Props",
            title: "Text Style Props",
            lazy: true
          }}
        />
        <Drawer.Screen
          name="ViewStyleProps"
          options={{
            drawerLabel: "View Style Props",
            title: "View Style Props",
            lazy: true
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
