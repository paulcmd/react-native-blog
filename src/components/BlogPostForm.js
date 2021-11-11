import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'


const BlogPostForm = ({ navigation, onSubmit }) => {
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
                title="Save Blog Post"
                 onPress={() => onSubmit(title, content)}
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

export default BlogPostForm
