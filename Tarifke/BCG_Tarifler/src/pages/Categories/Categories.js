import { StyleSheet, Text, View ,FlatList, ActivityIndicator} from 'react-native'
import React, {useState,useEffect}from 'react'
import Config from 'react-native-config';

import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard';
import useFetch from '../../hooks/useFetch/useFetch';

const Categories=({navigation})=> {
  const {loading,data,error}=useFetch(Config.API_CATEGORIES);

  const renderCategories= ({item})=> 
  <CategoriesCard 
  category={item}
  onSelect={() => handleCategorySelect(item.strCategory)}
  />;

  const handleCategorySelect = strCategory => {
    navigation.navigate('Details', {strCategory});
  };

  if(loading){
    return <ActivityIndicator size="large"/>
  }

  if(error){
    return <Text>{error}</Text>
  }

  return (
    <View>
      <FlatList data={data.categories} renderItem={renderCategories}/>
    </View>
  )
}
export default Categories
const styles = StyleSheet.create({})