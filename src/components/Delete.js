import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import TodoContext from "../context/TodoContext";

const Delete = ({todoID}) => {

    const {removeTodo} = useContext(TodoContext)

    const handelDelete = async ()=>{
        await removeTodo(todoID)
    }
    return (
        <>
            <FaRegTrashAlt onClick={()=> handelDelete()}/>
        </>
    )
}

export default Delete