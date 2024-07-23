import { useContext, useEffect, useState } from "react"
import TodoContext from "../context/TodoContext"


const Todos = () => {

    const { todos, error, getTodos } = useContext(TodoContext)
    const [loading, setLoading] = useState(true)    

    useEffect(() => {

        (async () => {

            await getTodos()

            setLoading(false)

        })()

    }, [getTodos])

    return (
        <>
            {loading && <p>Loading...</p >}
            {error && <p>{error}</p>}

            {todos.map(item => {
                return <p key={item.id}>{item.title}</p>
            })}
        </>
    )
}

export default Todos