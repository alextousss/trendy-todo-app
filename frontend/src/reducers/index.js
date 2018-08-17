import { combineReducers } from 'redux'
import todos from './todos'
import user from './user'
const reducers = combineReducers({
    todos,
    user,
})

export default reducers
