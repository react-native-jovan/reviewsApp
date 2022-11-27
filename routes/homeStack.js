import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../src/screens/Home";
import Details from "../src/screens/Details";
import About from "../src/screens/About";
import Header from "../components/Header";
import React from "react";
const screens={
    Home: {
        screen: Home,
        navigationOptions:{
            headerTitle:()=><Header/>,
            headerStyle:{
                backgroundColor:'red',
                
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
    Abouts:{
        screen: About
    }
}
const HomeStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'black',
           
        }
    }
})

export default createAppContainer(HomeStack)