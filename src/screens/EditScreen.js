import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context/BlogContext'
import { useRoute } from '@react-navigation/native'
import BlogPostForm from '../components/BlogPostForm'

import { StyleSheet } from 'react-native'

const EditScreen = ({ navigation }) => {
    

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

    //console.log('state object : ', state)
    //pass in id thru params. id is the id of the blog post that is being edited.

    return (
        
        <BlogPostForm />
    )
}

const styles = StyleSheet.create({
    
})

export default EditScreen
