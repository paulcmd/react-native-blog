import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import  { Provider }  from "./src/context/BlogContext"

import IndexScreen from "./src/screens/IndexScreen"
import ShowScreen from "./src/screens/ShowScreen"

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Index'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name='Index'
          component={IndexScreen}
          options={{
            title: "Index Screen",
          }}
        />
         <Stack.Screen
          name='Show'
          component={ShowScreen}
          options={{
            title: "Show Screen",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}


/* 
for react navigation v4 :

import { createAppContainer, createStackNavigator } from 'react-navigation';
const App = createAppContainer(navigator)

export default () => {
  return <App />
}

BlogProvider is the context provider and it accepts the children as a prop. 

*/