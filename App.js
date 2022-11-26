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

