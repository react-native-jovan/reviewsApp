import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../src/screens/Home";
import Details from "../src/screens/Details";
import About from "../src/screens/About";
const screens={
    Home: {
        screen: Home
    },
    Details:{
        screen: Details
    },
    Abouts:{
        screen: About
    }
}
const HomeStack=createStackNavigator(screens)

export default createAppContainer(HomeStack)