import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)


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

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

/* 
createScreen does not have initialValues, so it will only have an empty string 
for title and content
*/

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

