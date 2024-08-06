

import Delete from "../Delete";
import UpdateTodo from "./UpdateTodo";

const TodoTemplate = ({ todo }) => {

    const { title, completed, id } = todo

    return (
        <div className={`
           ${completed &&  'bg-gray-200'}
            p-6 
            flex 
            shadow-lg 
            border 
            justify-between 
            items-center
        `}>
            <p className="text-justify w-[75%]">
                {completed ? <del>{title}</del> : <span>{title}</span>}
            </p>
            <div className="flex gap-5 text-xl">
                <UpdateTodo todo={todo} />
                <Delete todoID={id} />
            </div>
        </div>
    )

}

export default TodoTemplate