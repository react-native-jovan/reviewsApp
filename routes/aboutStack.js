import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../src/screens/Home";
import Details from "../src/screens/Details";
import About from "../src/screens/About";
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons';
const screens={
  Abouts:{
    screen: About
},
    Home: {
        screen: Home,
        navigationOptions:{
            title:'About GameZone',
            headerStyle:{
                backgroundColor:'#333',
                
            }
        }
    },
    Details:{
        screen: Details,
        navigationOptions:{
            title:'Details Page',
            // headerStyle:{
            //     backgroundColor:'gray'
            // }
        }
    },

}
const AboutStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'black',
           
        }
    }
})

export default AboutStack;
