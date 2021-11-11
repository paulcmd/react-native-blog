import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]
        case 'EDIT_BLOG':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? {
                          ...blogPost,
                          title: action.payload.title,
                          content: action.payload.content
                      }
                    : blogPost
            })
        case 'DELETE_BLOG':
            return state.filter((blog) => blog.id !== action.payload)
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'ADD_BLOG', payload: { title, content } })
        callback ? callback() : null
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'EDIT_BLOG', payload: { id, title, content } })
        callback ? callback() : null
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'DELETE_BLOG', payload: id })
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, editBlogPost, deleteBlogPost },
    [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
)

/* 
BlogContext will be used to pass data from the BlogProvider to the Blog component.
It is a pipe of sorts, where the BlogProvider is the source of data and the Blog component is the consumer.

BlogProvider is exported as a named export, BlogContext is exported as a default export.
BlogProvider wraps the App, BlogContext is used by the components

const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` }
    ])
  }

    const deleteBlogPost = id => {
        setBlogPosts(blogPosts.filter(blog => blog.id !== id))
    }

    we can use the above functions or use the reducer to update the state

    export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []) //blogPosts is state

  

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

callback() represents the 3rd argument that is passed to the addBlogPost function on CreateScreen, on the 
Add Post button
*/
