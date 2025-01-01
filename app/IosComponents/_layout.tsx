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
        name="InputAccessoryView"
        options={{
          tabBarLabel: 'InputAccessoryView',
          title: 'InputAccessoryView',
        }}
      />
      <Tabs.Screen
        name="SafeAreaView"
        options={{
          tabBarLabel: 'SafeAreaView',
          title: 'SafeAreaView',
        }}
      />
    </Tabs>
  );
}
