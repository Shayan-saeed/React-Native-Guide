import { Tabs } from 'expo-router';

export default function TabScreenLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1f2229',
        },
        tabBarActiveTintColor: '#07bbed',
        tabBarInactiveTintColor: '#FFF',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="DrawerLayoutAndroid"
        options={{
          tabBarLabel: 'DrawerLayoutAndroid',
          title: 'DrawerLayoutAndroid',
        }}
      />
      <Tabs.Screen
        name="TouchableNativeFeedback"
        options={{
          tabBarLabel: 'TouchableNativeFeedback',
          title: 'TouchableNativeFeedback',
        }}
      />
    </Tabs>
  );
}
