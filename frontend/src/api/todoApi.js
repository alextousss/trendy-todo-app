import { httpClient } from './httpClient'

const TODO_API_URL = 'http://' + window.location.hostname + ':8000/api/todo/'

const createTodo = content => {
    return httpClient.post(TODO_API_URL, {'content': content})
}

const getTodos = () => {
    return httpClient.get(TODO_API_URL)
}

const removeTodo = id => {
    return httpClient.delete(TODO_API_URL + id)
}

const TodoApi = {createTodo, getTodos, removeTodo}

export {TodoApi}
