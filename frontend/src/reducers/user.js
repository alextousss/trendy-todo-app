import {
    GET_TOKEN,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAILURE,
    LOGOUT
} from '../actions/user.js'

const defaultState = {
    username: localStorage.getItem('username'),
    authenticated: localStorage.getItem('token') ? true : false,
    error: '',
}


const user = (state = defaultState, action) => {
    switch(action.type) {
        case GET_TOKEN:
            return Object.assign({}, state, {
                username: action.username  
            })
        case GET_TOKEN_SUCCESS:
            return Object.assign({}, state, {
                authenticated: true,
                error: null
            })
        case GET_TOKEN_FAILURE:
            return Object.assign({}, state, {
                error: action.error
            })
        case LOGOUT:
            return Object.assign({}, state, {
                authenticated: false,
                username: null
            })
        default:
            return state
    }
}

export default user;
