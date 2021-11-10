import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from './src/context/BlogContext'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Index"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#b3b3ff'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            >
                <Stack.Screen
                    name="Index"
                    component={IndexScreen}
                    options={({ navigation }) => ({
                        title: 'Index Screen',
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Create')}
                                style={styles.headerRight} 
                            >
                                <Feather name="plus" size={30} color="black" />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen
                    name="Show"
                    component={ShowScreen}
                    options={{
                        title: 'Show Screen'
                    }}
                />
                <Stack.Screen
                    name="Create"
                    component={CreateScreen}
                    options={{
                        title: 'Create Screen'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    headerRight: {
        height: 40,
        width: 50,
        padding: 5,
        marginRight: 10
    }
})


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
