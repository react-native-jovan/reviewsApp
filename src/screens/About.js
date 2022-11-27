import { View, Text,Button } from 'react-native'
import React from 'react'

export default function About({navigation}) {

  function pressHandler(props){
    navigation.navigate('Home')
    // navigation.goBack()
  }

  return (
    <View>
      <Text>About</Text>

      <Button title='Goback' onPress={pressHandler}/>
    </View>
  )
}