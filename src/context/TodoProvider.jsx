import { useCallback, useReducer, useState } from "react"
import TodoContext from "./TodoContext"
import todoReducer from "./todoReducer"
import axios from "axios"
import Alert from "../components/Alert"

const TodoProvider = ({ children }) => {

    const initialState = {
        todos: [],
        error: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const [filter, setFilter] = useState(null)

    const getTodos = useCallback(
        async () => {
            try {

                const url = `https://jsonplaceholder.typicode.com/users/1/todos
                ${filter ? `?_limit=${filter}` : ""}`

                const result = await axios.get(url)

                dispatch({ type: 'SET_TODOS', payload: result.data })
                dispatch({ type: "SET_ERROR", payload: null })

            }
            catch (err) {

                dispatch({ type: "SET_ERROR", payload: err.message })
                dispatch({ type: 'SET_TODOS', payload: [] })

            }
        }, [filter])

    const createTodo = async (title) => {

        const url = "https://jsonplaceholder.typicode.com/users/1/todos"

        try {
            const fetch = await axios.post(url, {
                title: title,
                completed: false
            })

            dispatch({ type: 'CREATE_TODO', payload: fetch.data })
            Alert('success', 'Todo Created')
        }
        catch (err) {
            Alert('error', err.message)
        }
    }

    const updateTodo = async (todo) => {
        try {
            const url = `https://jsonplaceholder.typicode.com/todos/${todo.id}`

            const res = await axios.put(url, {
                title: todo.title,
                completed: !todo.completed
            })

            dispatch({ type: "UPDATE_TODO", payload: res.data })

        } catch (err) {

            Alert('error', err.message)
        }
    }

    const removeTodo = async (todoId) => {

        try {
            const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`
            await axios.delete(url)

            dispatch({ type: "REMOVE_TODO", payload: todoId })
            Alert("warning", "item is deleted")
        }
        catch (err) {

            Alert("error", `try again ${err.message}`)

        }

    }

    return (
        <TodoContext.Provider
            value={{
                ...state,
                getTodos,
                setFilter,
                createTodo,
                removeTodo,
                updateTodo
            }}>

            {children}

        </TodoContext.Provider>
    )
}

export default TodoProvider