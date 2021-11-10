import React, { useState, useContext } from 'react'
import { Context } from '../context/BlogContext'

import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const { addBlogPost } = useContext(Context)

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
            title='Add Post'
            onPress={() => {
                addBlogPost(title, content, () => navigation.navigate('Index'))
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

export default CreateScreen
