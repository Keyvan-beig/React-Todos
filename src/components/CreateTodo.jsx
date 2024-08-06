import { useContext, useRef } from "react"
import TodoContext from "../context/TodoContext"

const CreateTodo = () => {

    const { createTodo } = useContext(TodoContext)
    const title = useRef()

    const handelForm = async (e) => {
        e.preventDefault()
        await createTodo(title.current.value)
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
                </form>
                <hr />
            </div>

        </>

    )
}

export default CreateTodo