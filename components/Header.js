import { View, Text } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons';


export default function Header() {
  return (
    <View className='w-full h-full flex flex-row items-center justify-between'>
        <MaterialIcons name="menu" size={24} color="white"/>

      <View>
        <Text className='text-white text-lg'>Header</Text>
      </View>
    </View>
  )
}