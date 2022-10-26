import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      ContentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      >
       
       <CategoryCard imageUrl ="https://links.papareact.com/wru"
       title ="testing"/>
      <CategoryCard imageUrl ="https://links.papareact.com/wru" 
      title="testing2"/>
      <CategoryCard imageUrl ="https://links.papareact.com/wru" 
      title="testing3"/> 



      
    </ScrollView>
  );
};

export default Categories;