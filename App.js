import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ListItem, Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeBaseProvider, VStack, HStack, Center, Heading, Text, Button, Box, Divider, Icon, Image  } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({route}) => ({
          headerShown: false,    
          cardStyle: { backgroundColor: '#fff' },
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = focused
              ? 'home' : 'home-outline';
          } else if (route.name == 'Receipts') {
            iconName = focused 
              ? 'receipt' : 'receipt-outline';
          } else if (route.name == 'Recipes') {
            iconName = focused 
              ? 'fast-food' : 'fast-food-outline';

          }

          return <Ionicons name={iconName} size={size} color={color} />;
          },
        })
        }
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Receipts" component={ReceiptsScreen} />
        <Tab.Screen name="Recipes" component={RecipesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>  
  );
}

const Tab = createBottomTabNavigator();

const list = [  {    name: 'Tea',    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    subtitle: '40oz'  },  {    name: 'Tapioca Pearls',    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',    subtitle: '500g'  }, {    name: 'Quinoa',    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',    subtitle: '500g'  }, {    name: 'Avocado toast',    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',    subtitle: '500g'  }, {    name: 'Soy sauce',    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    subtitle: '40oz'  },{    name: 'Oranges',    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    subtitle: '40oz'  },]

const GroceryList = () => {
  return (
    <VStack>
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{uri: l.avatar_url}} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle} </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>

        ))
      }
    </VStack>
  );
}

const HomeScreen = () => {
  return (
    <VStack bg="white" space={4}> 
    <Heading alignSelf="flex-start" pt={10} px={5} color="dark.50">Home</Heading>
      <HStack justifyContent="space-around" py={4} px={3}>
        <Button endIcon={<Icon as={Ionicons} name="arrow-forward" size={4}/>} bg="amber.400"> Receipts </Button>
        <Button endIcon={<Icon as={Ionicons} name="arrow-forward" size={4}/>} bg="secondary.400"> Recipes </Button>
      </HStack>
      <GroceryList/>
    </ VStack>
  );
}

const CameraCard = () => {
  return (
    <VStack> 
      <Box shadow={2} p="12" rounded="sm" >
      <Button bg="amber.400" alignSelf="center"
        startIcon={<Icon as={MaterialCommunityIcons} name="camera" size={5} />}
      >
        Upload
      </Button>
      </Box>
      
    </VStack>
  );
}

const ReceiptsScreen = () => {
  return (
  <VStack bg="white">
    <Heading pt={6} px={4} alignSelf="center" color="dark.50">
      Receipts
    </Heading>
    <CameraCard/>
  </VStack>
  )
}

const RecipesScreen = () => {
  return (
  <VStack>
    <CameraCard> </CameraCard>
  </VStack>
  )

}
