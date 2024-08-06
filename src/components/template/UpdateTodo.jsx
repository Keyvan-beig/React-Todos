import { useContext, useState } from "react";
import { PiChecksBold } from "react-icons/pi";
import { PiCheckBold } from "react-icons/pi";
import TodoContext from "../../context/TodoContext";
import Loading from "../Loading";

const UpdateTodo = ({ todo }) => {

    const [loading, setLoading] = useState(false)

    const { updateTodo } = useContext(TodoContext)
    const handeleClick = async () => {
        setLoading(true)
        await updateTodo(todo)
        setLoading(false)
    }

    return (
        <>
            {loading && <Loading />}
            {todo.completed ?
                <PiChecksBold onClick={() => handeleClick()} /> :
                <PiCheckBold onClick={() => handeleClick()} />}
        </>
    )
}

export default UpdateTodo