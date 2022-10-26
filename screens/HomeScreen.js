
import {useNavigation} from '@react-navigation/native';
import {UserIcon,ChevronDownIcon,SearchIcon,AdjustmentIcon} from 'react-native-heroicons/outline';
import { Image, SafeAreaView, ScrollView, TextInput } from 'react-native';


import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Categories from './components/Categories';
import FeaturedRows from './FeaturedRows';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        });
    },[]);


  return (
    <SafeAreaView className="bg-white pt-10">

         <View  className="flex-row pb-3 items-center mx-4  space-x-2">
         <Image source={{uri:"https://links.papareact.com/wru",}}
              className = "h-7 w-7 bg-gray-300 p-4 rounded-fall"/>
      

         <View className="flex-1">
         <Text className = "font-bold text-gray-500 text-xs">Deliver Now</Text>
         <Text className = "font-bold text-gray-500 text-xl">Current Location
         <ChevronDownIcon size={20} color= "#00CCBB"/>
           </Text>
           </View>
           <UserIcon size={35} color="#00CCBB"/>
            </View>

           <View className="flex-row items-center space-x-2 pb-2 mx-4">
           <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">

            
        {/* <SearchIcon color="gray" size={20}/> */}
         <TextInput placeholder="Restaurants and cuisines" 
           keyboardType="default"
             />
            </View>
              {/* <AdjustmentIcon color = "#00CCBB"/>     */}
             </View>
     {/* Body */}

             <ScrollView>

            <Categories/>

            <FeaturedRows
            id = "123"
            title = "featured"
            description = "Paid placement for our partners"
            // featuredCategories = "features"
            />

<FeaturedRows
            id = "1234"
            title = "featured"
            description = "Paid placement for our partners"
            // featuredCategories = "features"
            />

<FeaturedRows
            id = "12345"
            title = "featured"
            description = "Paid placement for our partners"
            // featuredCategories = "features"
            />



             </ScrollView>

    

         
    </SafeAreaView>
  );
};

