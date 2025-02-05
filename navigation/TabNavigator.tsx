import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import MyTripsScreen from '../screens/MyTripsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Parcels':
              iconName = 'package-variant-closed';
              break;
            case 'Trips':
              iconName = 'walk';
              break;
            case 'Rewards':
              iconName = 'gift';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Parcels" component={HomeScreen} />
      <Tab.Screen name="Trips" component={MyTripsScreen} />
      <Tab.Screen name="Rewards" component={MyTripsScreen} />
    </Tab.Navigator>
  );
}
