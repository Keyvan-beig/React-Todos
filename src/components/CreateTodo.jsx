import { useContext, useRef, useState } from "react"
import TodoContext from "../context/TodoContext"
import Loading from "./Loading"

const CreateTodo = () => {

    const [loading,setLoading] = useState()
    const { createTodo } = useContext(TodoContext)
    const title = useRef()

    const handelForm = async (e) => {
        setLoading(true)
        e.preventDefault()
        await createTodo(title.current.value)
        setLoading(false)
    }

    return (
        <>
            <div className="p-6">

                <form className="m-3" onSubmit={(e) => handelForm(e)}>
                    <h1 className="text-2xl my-2">Create Todo</h1>
                    <input
                        ref={title}
                        type="text"
                        className="border p-2 w-72 rounded-lg"
                        placeholder="create todo..."
                    />
                    <input
                        className="mx-3 py-2 px-6 bg-slate-700 text-white rounded-lg"
                        type="submit"
                        value="Submit"
                    />
                    {loading && <span className="inline-block"><Loading/></span>}
                </form>
                <hr />
            </div>

        </>

    )
}

export default CreateTodo