import React, { useContext } from 'react'
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
    const { state, deleteBlogPost } = useContext(Context)
    console.log('navigation from Index: ', navigation)
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
