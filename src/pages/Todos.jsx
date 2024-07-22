import { useContext, useEffect } from "react"
import TodoContext from "../context/TodoContext"

const Todos = () => {

    const todoContext = useContext(TodoContext)

    useEffect(() => {

        const url = "https://jsonplaceholder.typicode.com/users/1/todos"

        fetch(url)
            .then(result => result.json())
            .then((data) => {
                todoContext.dispatch({ type: 'SET_TODOS', payload: data })

            })
            .catch(() => {

            })
    }, [])

    return (
        <>

        {console.log(todoContext.state)}
            
        </>
    )
}

export default Todos