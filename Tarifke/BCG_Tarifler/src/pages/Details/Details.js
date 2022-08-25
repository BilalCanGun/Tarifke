import {Text, ActivityIndicator, FlatList, Linking} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import MealCard from '../../Components/DetailsCard/Details.Card';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;

  const {data, error, loading} = useFetch(`${Config.API_MEALS}${strCategory}`);

  const renderMeals = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );

  const handleMealSelect = idMeal => {
    navigation.navigate('Recipes', {idMeal});
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return <FlatList data={data.meals} renderItem={renderMeals} />;
};

export default Meals;