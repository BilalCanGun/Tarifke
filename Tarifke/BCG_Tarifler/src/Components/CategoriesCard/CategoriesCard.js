import { StyleSheet, Text, View,Image ,TouchableWithoutFeedback} from 'react-native'
import React from 'react'

const CategoriesCard=({category,onSelect})=> {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: category.strCategoryThumb}}
          />
          <Text style={styles.text}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'orange',
    margin: 5,
    flexDirection: 'row',
    borderTopLeftRadius: 40,
    
    
  },
  image:{
    minHeight: 100,
    width: 180,
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor: 'orange',
   
  },
  text:{
    marginLeft: 10,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'flex-end',
    paddingTop:40
    
  }
})