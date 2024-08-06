import { useContext, useEffect, useState } from "react"
import TodoContext from "../context/TodoContext"
import TodoTemplate from "../components/template/TodoTemplate"
import Filter from "../components/Filter"
import CreateTodo from "../components/CreateTodo"
import Loading from "../components/Loading"


const Todos = () => {

    const { todos, error, getTodos, setFilter} = useContext(TodoContext)
    const [loading, setLoading] = useState(true)

    const handelFilter = (e) => {

        setFilter(e)

    }

    useEffect(() => {

        (async () => {

            await getTodos()

            setLoading(false)

        })()

    }, [getTodos])

    return (
        <>
            <CreateTodo />

            {loading && <div className="flex justify-center my-14"><Loading/></div>}

            {error && <div className="flex justify-center my-14"><p>{error}</p></div>}

            {!loading && !error ? <Filter handelFilter={handelFilter} /> : ""}

            <div className="
                grid 
                lg:grid-cols-3
                md:grid-cols-2
                gap-5  
                p-6
            ">
                {todos.map(item => {
                    return (
                        <TodoTemplate
                            key={item.id}
                            todo = {item}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Todos