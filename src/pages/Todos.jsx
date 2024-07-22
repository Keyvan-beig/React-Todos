import { useContext, useEffect } from "react"
import TodoContext from "../context/TodoContext"
import axios from "axios"

const Todos = () => {

    const todoContext = useContext(TodoContext)

    useEffect(() => {

        const url = "https://jsonplaceholder.typicode.com/users/1/todos"

        axios.get(url)
            .then(res => {
                todoContext.dispatch({ type: 'SET_TODOS', payload: res.data })
                
            })
            .catch(err => console.log(err.message))

    }, [])

    return (
        <>

            {todoContext.state.todos.map(item=>{
                return <p key={item.id}>{item.title}</p>
            })}

        </>
    )
}

export default Todos