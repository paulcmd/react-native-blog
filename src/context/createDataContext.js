import React, { createContext, useReducer } from "react"

export default (reducer, actions, initialState) => {

    const Context = createContext()

     const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)
      
        //actions === {addBlogPost: (dispatch) => {return () => {}}}

        const boundActions = {}
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
            console.log('bound actions from create data context',boundActions)
        }
      
        return (
          <Context.Provider value={{ state, ...boundActions }}>
            {children}
          </Context.Provider>
        )
      }

      return { Context, Provider }
}

/* 
This will be use to create a generic context for other parts of the application.
eg BlogContext, UserContext, etc.

we are calling the new object boundActions to indicate that we have processed these actions
 and now we want to bind them/it to this copy of dispatch

 VIDEO 138 - more automatic context creation
*/