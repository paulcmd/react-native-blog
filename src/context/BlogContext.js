import createDataContext from "./createDataContext"

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, {
        id: Math.floor(Math.random() * 999),
        title: `My blog number ${state.length + 1}`,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    }]
    case "DELETE_BLOG":
      return state.filter(blog => blog.id !== action.payload)
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: "ADD_BLOG"})
    }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
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

*/
