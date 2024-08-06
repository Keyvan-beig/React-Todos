
const todoReducer = (state, action) => {

    switch (action.type) {
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload
            }
        case "CREATE_TODO":
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case "UPDATE_TODO":
            return {
                ...state,
                todos : state.todos.map(item => {
                    if(item.id === action.payload.id){
                        return {...item , completed : action.payload.completed}
                    }
                    return item
                })
            }
        case "REMOVE_TODO":
            return {
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state

    }

}

export default todoReducer