import { TodoApi } from './../api/todoApi'

export const CREATE_TODO = 'CREATE_TODO'
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS'
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE'

export const GET_TODOS = 'GET_TODOS'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE'

export const REMOVE_TODO = 'DELETE_TODO'
export const REMOVE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export const REMOVE_TODO_FAILURE = 'DELETE_TODO_FAILURE'



export const addTodo = (content) => {
    return (dispatch) => {
        dispatch({
            type: CREATE_TODO,
            content
        })
            
        TodoApi.createTodo(content)
        .then((response) => {
            dispatch(addTodoSuccess(response.data))
        })
        .catch((err) => {
            dispatch(addTodoFailure(err.response))
        })
    }
}

export const addTodoSuccess = (data) => {
    console.log(data)
    return {
        type: CREATE_TODO_SUCCESS,
        id: data.id,
        content: data.content
    }
}

export const addTodoFailure = (response) => {
    return {
        type: CREATE_TODO_FAILURE,
        response,
    }
}

export const getTodos = ()  => {
    return (dispatch) => {
        dispatch({
            type: GET_TODOS
        })
        TodoApi.getTodos()
        .then((response) => {
            dispatch(getTodosSuccess(response.data))
        })
        .catch ((err) => {
            dispatch(getTodosFailure(err.response))
        })

    }
}

export const getTodosSuccess = (data) => {
    return {
        type: GET_TODOS_SUCCESS,
        todos: data
    }
}

export const getTodosFailure = (response, id) => {
    return {
        type: GET_TODOS_FAILURE,
        response,
    }
}

export const removeTodo = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_TODO,
            id
        })
        TodoApi.removeTodo(id)
        .then((response) => {
            dispatch(removeTodoSuccess(response.data, id))
        })
        .catch ((err) => {
            dispatch(removeTodoFailure(err.response, id))
        })
    }
}

export const removeTodoSuccess = (data, id) => {
    return {
        type: REMOVE_TODO_SUCCESS,
        id
    }
}

const removeTodoFailure = (response, id) => {
    return {
        type: REMOVE_TODO_FAILURE,
        response,
    }
}
