import { useCallback, useReducer } from "react"
import TodoContext from "./TodoContext"
import todoReducer from "./todoReducer"
import axios from "axios"

const TodoProvider = ({ children }) => {

    const initialState = {
        todos: [],
        error: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const getTodos = useCallback(
        async () => {
            try {
    
                const url = "https://jsonplaceholder.typicode.com/users/1/todos"
    
                const result = await axios.get(url)
    
                dispatch({ type: 'SET_TODOS', payload: result.data })
                dispatch({ type: "SET_ERROR", payload: null })
    
            }
            catch (err) {
    
                dispatch({ type: "SET_ERROR", payload: err.message })
                dispatch({ type: 'SET_TODOS', payload: [] })
                
            }
        },[]) 


    return (
        <TodoContext.Provider value={{ ...state, getTodos }}>

            {children}

        </TodoContext.Provider>
    )
}

export default TodoProvider