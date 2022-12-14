import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon,LocationMarkerIcon } from 'react-native-heroicons/outline'

const RestaurantCards = ({
    id,
    imgUrl,
    title,
    ratings,
    genre,
    address,
    short_description,
    dishes,
    long,
    la,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
     <Image
     source={{
        uri:imgUrl,
     }}
     className = "h-36 w-64 rounded-sm"
     />

     <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1"/>
        <StarIcon color="green" opacity={2.5} size="22"/>
        <Text className="text-xs text-gray-500">
            <Text className="text-green-500 ">{ratings}</Text>.{genre}
            </Text>
     </View>

     <View className="flex-row items-center space-x-1">

       {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22}/> */}
       <Text className="text-xs text-gray-500">Nearby.{address}</Text>

     </View>
    </TouchableOpacity>
  )
}

export default RestaurantCards