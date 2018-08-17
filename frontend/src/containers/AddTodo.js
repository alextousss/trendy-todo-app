import TodoForm from '../components/TodoForm'

import { connect } from 'react-redux'
import { addTodo} from '../actions/todos'


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (content) => {
            dispatch(addTodo(content))
        }
    }
}

let AddTodo = connect(null, mapDispatchToProps)(TodoForm)

export default AddTodo
