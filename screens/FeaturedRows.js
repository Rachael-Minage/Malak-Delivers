import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './components/RestaurantCards'

const FeaturedRows = ({id, title,description}) => {
  return (
  <View>
     <View className = "mt-4 flex-row items-center justify-between" px-4>
     <Text className= "font-bold text-lg">{title} </Text>
     <ArrowRightIcon color="#00CCBB"/>
    </View>
    
    <Text className="text-xs text-gray-200 px-4">{description}</Text>
  
  <ScrollView 
  horizontal
  contentContainerStyle={{
    paddingHorizontal: 15,
  }}
  showsHorizontalScrollIndicator={false}
  className=""pt-4
  >
    {/* RestaurantCards */}
    <RestaurantCards
    id ={1234}
    imgUrl="https://links.papareact.com/gn7"
    title="Fries!"
    ratings="4.5"
    genre="Japanese"
    address="123 Main st"
    short_description="Best fries you'll ever get"
    dishes={[]}
    long={20}
    lat={0}

    />

<RestaurantCards
    id ={1234}
    imgUrl="https://links.papareact.com/gn7"
    title="Fries!"
    ratings="4.5"
    genre="Japanese"
    address="123 Main st"
    short_description="Best fries you'll ever get"
    dishes={[]}
    long={20}
    lat={0}

    />
     <RestaurantCards
    id ={1234}
    imgUrl="https://links.papareact.com/gn7"
    title="Fries!"
    ratings="4.5"
    genre="Japanese"
    address="123 Main st"
    short_description="Best fries you'll ever get"
    dishes={[]}
    long={20}
    lat={0}

    />

<RestaurantCards
    id ={1234}
    imgUrl="https://links.papareact.com/gn7"
    title="Fries!"
    ratings="4.5"
    genre="Japanese"
    address="123 Main st"
    short_description="Best fries you'll ever get"
    dishes={[]}
    long={20}
    lat={0}

    />
    
  
  
  </ScrollView>
  </View>
  )
}

export default FeaturedRows