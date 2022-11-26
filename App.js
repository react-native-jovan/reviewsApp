import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Home from './src/screens/Home';

const getFonts=()=>{
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-medium': require('./assets/fonts/Nunito-Medium.ttf'),
  })
}
export default function App() {
  return (
    <TailwindProvider>   
        <Home/>
    </TailwindProvider>
  );
}

