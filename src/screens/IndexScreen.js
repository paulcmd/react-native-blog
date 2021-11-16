import React, { useContext, useEffect } from 'react'
import { Context } from '../context/BlogContext'
import Feather from 'react-native-vector-icons/Feather'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity
} from 'react-native'

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context)
    //console.log('NAVIGATION OBJECT : ', navigation)
    useEffect(() => {
        getBlogPosts()

        const listener = navigation.addListener('focus', () => {
            getBlogPosts()
        })

       return () => {
              listener.remove()
       }
    }, [])

    return (
        <View>
            <View>
                <FlatList
                    data={state}
                    keyExtractor={(blogPost) => blogPost.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('Show', { id: item.id })
                                }
                            >
                                <View style={styles.row}>
                                    <Text style={styles.title}>
                                        {item.title} - {item.id}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => deleteBlogPost(item.id)}
                                    >
                                        <Feather
                                            style={styles.icon}
                                            name="trash"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

/* 
 navigation v4 - setting navigation options
IndexScreen.navigationOptions = ({ navigation }) => {
    console.log('navigation from Index: ', navigation)
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('Create')}
            >
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    }
} */

/* 
navigationOptions will run the function just before the screen is rendered.

we do not call functions that are coming from useContext directly eg getBlogPost.
If we do, they will make an api call, our state will be updated, and then the function
will be called again. we will get an infinite loop. use useEffect instead to call the function.

const listener = navigation.addListener('didFocus', () => {
            getBlogPosts()
        })

        return () => {
            listener.remove()
        }

whenever we navigate to the screen(it gets on focus), we will call getBlogPosts again. 

the listener will remove itself after our instance of IndexScreen is no longer on 
focus/showing on the screen

addListener in nav v 5 is called focus and not didFocus

*/

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 10
    }
})

export default IndexScreen
