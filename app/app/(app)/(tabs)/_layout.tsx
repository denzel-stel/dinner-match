import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import colors from '@/assets/styles/colors';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
    
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        sceneStyle: {
          padding: 16,
          backgroundColor: colors.backgroundColor
        },
        tabBarStyle: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          padding: 16,
          borderColor: "white",
          height: 60,
        }
    }}
>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Recipes',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}/>
      <Tabs.Screen
        name="test"
        options={{
          title: 'Test',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}/>
    </Tabs>
  );
}