import { connect } from 'react-redux'
import { removeTodo, getTodos } from '../actions/todos'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(removeTodo(id))
        },
        onMount: () => {
            dispatch(getTodos())
        }
    }
}

const ListTodo = connect (
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)

export default ListTodo
