import React from 'react';
import { NativeBaseProvider, VStack, HStack, Center, Heading, Text, Box, Divider, Icon, Image } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
      <Heading alignSelf="center">🧑‍🍳 Recette</Heading>
      <Text alignSelf="center" fontSize="md" >        
    <Text style={{ textDecorationColor: "blue", textDecorationLine: "underline", textDecorationStyle: "wavy" }} fontSize="lg" >Recipes</Text>
      </Text>
      
      <Box bg="primary.400" p="12" rounded="md">
        What I got today 
      </Box>
      <Box bg="secondary.400" p="12" rounded="lg" >
        What I ate today
      </Box>
      <Box bg="emerald.400" p="12" rounded="lg" >
        What a great day
      </Box>
      
            
      </VStack>

      
    </NativeBaseProvider>
  );
}

