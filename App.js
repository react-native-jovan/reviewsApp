import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font'
import React,{useState  } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Home from './src/screens/Home';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack'


const getFonts=()=>{
  return Font.loadAsync({
    'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-medium': require('./assets/fonts/Nunito-Medium.ttf'),
  })
}


export default function App() {
  

  const [fontLoaded,setFontsLoaded]=useState(false)
  if (fontLoaded) {
    return (
      <TailwindProvider>   
          <Navigator/>
      </TailwindProvider>
    );   
  }else{
    setFontsLoaded(true)
    // return (<AppLoading
    // startAsync={getFonts}
    // onFinish={()=>setFontsLoaded(true)}
   
    // />)
  }
  
}



//In App.js in a new project


//   import Home from './src/screens/Home';
//   import { TailwindProvider } from 'tailwindcss-react-native';

//   import * as React from 'react';

//   import { createDrawerNavigator } from '@react-navigation/drawer';
//   import { NavigationContainer } from '@react-navigation/native';


//   const Drawer = createDrawerNavigator();
  
//   export default function App() {
//     return (
//       <TailwindProvider>
//       <NavigationContainer>
//         <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Home" component={Home} />
//           <Drawer.Screen name="Abouts" component={Abouts} />
//         </Drawer.Navigator>
//       </NavigationContainer></TailwindProvider>
//     );
//   }

