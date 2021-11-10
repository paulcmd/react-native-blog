import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context/BlogContext'
import { useRoute } from '@react-navigation/native'

import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const EditScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const { state, editBlogPost } = useContext(Context)
    const { id } = useRoute().params
    console.log(id)
    const blogPost = state.find((blogPost) =>
        blogPost.id === id
            ? blogPost
            : null
    )
    useEffect(() => {
        setTitle(blogPost.title)
        setContent(blogPost.content)
    }, [])

    console.log('state object : ', state)
    //pass in id thru params. id is the id of the blog post that is being edited.

    return (
        <View>
            <View>
                <Text style={styles.label}>Enter Title</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
            </View>
            <View>
                <Text style={styles.label}>Enter Content</Text>
                <TextInput
                    style={styles.input}
                    value={content}
                    onChangeText={(text) => setContent(text)}
                />
            </View>
            <Button
                style={styles.button}
                title="Edit Post"
                onPress={() => {
                    editBlogPost(id, title, content, () =>
                        navigation.navigate('Index')
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 0.7,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 5
    },
    button: {
        margin: 5
    }
})

export default EditScreen
