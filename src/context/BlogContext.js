import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'GET_BLOGS':
            return action.payload
        case 'ADD_BLOG':
            return [
                ...state,
                {
                    id: action.payload.id,
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

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({ type: 'GET_BLOGS', payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        const { data } = await jsonServer.post('/blogposts', { title, content })
        console.log('response from server : ', data)
        dispatch({
            type: 'ADD_BLOG',
            payload: {
                id: data.id,
                title: data.title,
                content: data.content
            }
        })
        callback ? callback() : null
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        const { data } = await jsonServer.put(`/blogposts/${id}`, {
            title,
            content
        })
        dispatch({
            type: 'EDIT_BLOG',
            payload: {
                id: data.id,
                title: data.title,
                content: data.content
            }
        })
        callback ? callback() : null
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'DELETE_BLOG', payload: id })
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { getBlogPosts, addBlogPost, editBlogPost, deleteBlogPost },
    []
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
