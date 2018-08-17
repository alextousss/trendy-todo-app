import { 
    CREATE_TODO,
    CREATE_TODO_SUCCESS,
    GET_TODOS_SUCCESS,
    REMOVE_TODO,
} from '../actions/todos.js'

const todos = (state = [], action) => {
    console.log(action);
    console.log(state);
    switch(action.type) {
        case CREATE_TODO:
            return state;

        case CREATE_TODO_SUCCESS:
            return [
                ...state,
                {
                    id: action.id,
                    content: action.content
                }
            ]

        case GET_TODOS_SUCCESS:
            return Object.assign([], action.todos)
         
        case REMOVE_TODO: 
            return state.filter(todo => {
                if(todo.id !== action.id) {
                    return todo;
                }
            })
        
        default:
            return state;
    }
}

export default todos;
