import { View, Text } from 'react-native'
import React from 'react'

export default function Details({navigation}) {
  return (
    <View>
      <Text className="items-center text-green-700 underline font-bold text-2xl">{`${navigation.getParam('key')}. ${navigation.getParam('title')}`}</Text>
      <Text>{navigation.getParam('body')}</Text>
    </View>
  )
}