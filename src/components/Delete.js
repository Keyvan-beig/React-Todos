import { useContext, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import TodoContext from "../context/TodoContext";
import Loading from "./Loading";

const Delete = ({ todoID }) => {

    const [loading, setLoading] = useState(false)

    const { removeTodo } = useContext(TodoContext)

    const handelDelete = async () => {
        setLoading(true)
        await removeTodo(todoID)
    }
    return (
        <>
            {loading && <Loading />}
            <FaRegTrashAlt onClick={() => handelDelete()} />
        </>
    )
}

export default Delete