import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { ListItem, Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  NativeBaseProvider,
  VStack,
  HStack,
  Center,
  Heading,
  Text,
  Button,
  Box,
  Divider,
  Icon,
  Image,
} from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FlatGrid } from 'react-native-super-grid';
import * as ImagePicker from "expo-image-picker"

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: 'transparent'}}
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
          } else if (route.name == 'Meals') {
            iconName = focused 
              ? 'fast-food' : 'fast-food-outline';
          } else if (route.name == 'Groceries') {
            iconName = focused 
              ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
          },
        })
        }
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Groceries" component={GroceriesScreen} />
        <Tab.Screen name="Meals" component={MealsScreen} />
        <Tab.Screen name="Receipts" component={ReceiptsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>  
  );
}

const Tab = createBottomTabNavigator();

//HARDCODED DATA
const GroceriesData = [
  {
    name: "Tea",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "40oz",
  },
  {
    name: "Tapioca Pearls",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "500g",
  },
  {
    name: "Quinoa",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "500g",
  },
  {
    name: "Avocado toast",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "500g",
  },
  {
    name: "Soy sauce",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "40oz",
  },
  {
    name: "Oranges",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "40oz",
  },
];

const MealsData = [
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
];


const GroceriesList = () => {
  return (
    <VStack>
      {
        GroceriesData.map((l, i) => (
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

const MealsGrid = () => {
  const [meals, setMeals] = React.useState(MealsData);
  return (
    <FlatGrid
      itemDimension={130}
      data={meals}
      spacing={10}
        renderItem={({ item }) => (
          <VStack bg="secondary.400">
            <Text> {item.name} </Text>
            <Text> {item.code} </Text>
          </VStack>
      )}
    />

  );

}

const HomeScreen = ({ navigation }) => {
  return (
    <VStack justifyContent="space-around" bg="white"  py={4} px={3} space={4}> 
    <Heading alignSelf="flex-start" pt={10} px={5} color="dark.50">Home</Heading>
        <Button onPress={() => navigation.navigate('Groceries')} startIcon={<Icon as={Ionicons} name="cart" size={6}/>} endIcon={<Icon as={Ionicons} name="arrow-forward" size={6}/>} bg="primary.400"> Groceries</Button>
      <Button onPress={() => navigation.navigate('Meals')}  startIcon={<Icon as={Ionicons} name="fast-food" size={6}/>} endIcon={<Icon as={Ionicons} name="arrow-forward" size={6}/>} bg="amber.400"> Meals </Button>
        <Button onPress={() => navigation.navigate('Receipts')} startIcon={<Icon as={Ionicons} name="receipt" size={6}/>} endIcon={<Icon as={Ionicons} name="arrow-forward" size={4}/>} bg="secondary.400"> Receipts </Button>
    </ VStack>
  );
}

const GroceriesScreen = ({ navigation }) => {
  return (
    <VStack bg="white" space={4}>
    <Heading pt={6} px={4} alignSelf="center" color="dark.50">
     Groceries 
    </Heading>
      <GroceriesList/>
    </VStack>
  );
}

const CameraCard = () => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const clickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <VStack>
      <Box shadow={2} p="12" rounded="sm">
        <Button
          onPress={clickImage}
          bg="amber.400"
          alignSelf="center"
          startIcon={
            <Icon as={MaterialCommunityIcons} name="camera" size={5} />
          }
        >
          Upload Image
        </Button>
      </Box>
    </VStack>
  );
};

const ReceiptsScreen = ({ navigation }) => {
  return (
  <VStack bg="white">
    <Heading pt={6} px={4} alignSelf="center" color="dark.50">
      Receipts
    </Heading>
    <CameraCard/>
    {/*TODO: update to ReceiptsGrid; just placeholder*/}
  </VStack>
  )
}

const MealsScreen = ({ navigation }) => {
  return (
  <VStack bg="white">
    <Heading pt={6} px={4} alignSelf="center" color="dark.50">
      Meals
    </Heading>
    <CameraCard> </CameraCard>
    <MealsGrid/>
  </VStack>
  )

}
