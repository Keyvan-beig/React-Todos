import { useContext } from "react";
import { PiChecksBold } from "react-icons/pi";
import { PiCheckBold } from "react-icons/pi";
import TodoContext from "../../context/TodoContext";

const UpdateTodo = ({ todo }) => {

    const { updateTodo } = useContext(TodoContext)
    const handeleClick = () => {
        updateTodo(todo)
    }

    return (
        <>
            {todo.completed ?
                <PiChecksBold onClick={() => handeleClick()} /> :
                <PiCheckBold onClick={() => handeleClick()} />}
        </>
    )
}

export default UpdateTodo