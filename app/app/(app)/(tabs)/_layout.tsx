import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import colors from '@/assets/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';
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
          backgroundColor: colors.backgroundColor
        },
        tabBarStyle: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderColor: "white",
          height: 55,
        }
    }}
>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) =>  {
            return <View style={styles.iconWrapper}>
              <Icon name="book" color={color} size={30} />
            </View>
          }
        }}/>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}/>
      <Tabs.Screen
        name="test"
        options={{
          title: 'Test',
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}/>
    </Tabs>
  );
}
const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',    // Center content horizontally (often desired for icons)
    width: '100%', // Ensure it spans the full width of the tab
  },
});
