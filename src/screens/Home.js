import { View, Text ,Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  function pressHandler(props){
    // navigation.navigate('Abouts')
    navigation.push('Abouts')
  }
  return (
    <View className=" text-red-900">
      <Text className="text-red-900 font-nunito  text-xl">Home Screen</Text>
      <Button className=" rounded-3xl bg-red-300" title="Go to reviews" onPress={pressHandler}/>
    </View>
  )
}