import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories/Categories';
import Details from './pages/Details/Details';
import Recipes from './pages/Recipes/Recipes';

const Stack = createNativeStackNavigator();

const Router=()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} options={{title:"Kategoriler",headerTitleStyle:{color:'orange',fontWeight:'bold'}}} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Recipes" component={Recipes} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;