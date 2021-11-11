import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

import { View, StyleSheet } from 'react-native'

const CreateScreen = ({ navigation }) => {
    const navigateToIndex = () => navigation.navigate('Index')

    const { addBlogPost } = useContext(Context)
    return (
        <BlogPostForm
            onSubmit={(title, content) => {
                addBlogPost(title, content, navigateToIndex)
            }}
        />
    )
}

const styles = StyleSheet.create({})

export default CreateScreen
