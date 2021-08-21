import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ListItem, Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeBaseProvider, VStack, HStack, Center, Heading, Text, Box, Divider, Icon, Image, Button } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
    <NavigationContainer>
    <NativeBaseProvider>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = focused
              ? 'fridge' : 'fridge-outline';
          } else if (route.name == 'Pictures') {
            iconName = focused 
              ? 'camera' : 'camera-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Pictures" component={PicturesScreen} />
      </Tab.Navigator>
    </NativeBaseProvider>  
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <VStack> 
      <Text> Home! </Text>
      </ VStack>
  );
}

const PicturesScreen = () => {
  return (
  <VStack>
  <Text>
    This is a screen for managing your pictures.
  </Text>
  </VStack>
  )
}
