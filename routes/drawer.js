import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation'
import React from 'react'
import HomeStack from './homeStack'
import AboutStack from './aboutStack'




const Drawer = createDrawerNavigator();

export default function Drawer2() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Abouts">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Abouts" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


// export default function drawer() {
//   return (
//     <View>
//       <Text>drawer</Text>
//     </View>
//   )
// }