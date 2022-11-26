import { View, Text ,Button,FlatList,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

export default function Home({navigation}) {

  const [reviews,setReviews] = useState([
    {title:"Zelda ,Breath of fresh Air",rating:5,body:'lorem Ipsum text',key:1},
    {title:"Zelda ,milna",rating:5,body:'lorem Ipsum text',key:4},
    {title:"Texas new",rating:3,body:'lorem Ipsum text to the manager',key:3}
  ])

  function pressHandler(item){
    navigation.navigate('Details',item)
    // navigation.push('Abouts')
  }
  return (
    <View className=" text-red-900">
      <FlatList
      data={reviews}

      renderItem={({item})=><TouchableOpacity className="m-3" key={item.key} onPress={()=>navigation.navigate('Details',item)}>
        <Text className="text-orange-600 py-3 px-8 bg-blue-200 folnt-bold">{item.title}</Text>
      </TouchableOpacity>}
      />

      {/* <Text className="text-red-900 font-nunito  text-xl">Home Screen</Text> */}
      {/* <Button className=" rounded-3xl bg-red-300" title="Go to reviews" onPress={pressHandler}/> */}
    </View>
  )
}