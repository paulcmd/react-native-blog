import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native'
import { Context } from '../context/BlogContext'

import { View, Text, StyleSheet } from 'react-native'

const ShowScreen = ({ navigation, route }) => {
    const { state } = useContext(Context)
    //console.log('state', state)
    //console.log('route', route.params.id)
    const { id } = useRoute().params

    const blogPost = state.find((blogPost) => blogPost.id === id)

    //console.log(navigation)
    return (
        <View>
            <View>
                <Text>{blogPost.title}</Text>
            </View>
            <View>
                <Text>{blogPost.content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ShowScreen
