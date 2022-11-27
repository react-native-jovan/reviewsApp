import { View, Text } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons';


export default function Header() {
  return (
    <View className='w-screen h-[100%] flex flex-row items-center justify-center'>


      <View>
        <Text className=''>Header</Text>
      </View>
    </View>
  )
}