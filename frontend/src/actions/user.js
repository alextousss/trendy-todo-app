import { UserApi } from './../api/userApi'

import { history } from './../store' 

export const GET_TOKEN = 'GET_TOKEN'
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS'
export const GET_TOKEN_FAILURE = 'GET_TOKEN_FAILURE'

export const LOGOUT = 'LOGOUT'

export const getToken = (username, password) => {
    return (dispatch) => {
        dispatch({
            type:GET_TOKEN,
            username: username
        })
        
        UserApi.getToken(username, password)
        .then((response) => {
            dispatch(getTokenSuccess(username, response.data.token))
        })
        .catch((err) => {
            dispatch(getTokenFailure(err.response))
        })
    }
}

export const getTokenSuccess = (username, token) => {
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
    return {
        type: GET_TOKEN_SUCCESS,
    }
}

export const getTokenFailure = (response) => {
    return {
        type: GET_TOKEN_FAILURE,
        response,
        error: 'Invalid credentials'
    }
}

export const logout = () =>  {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    return {
        type: LOGOUT
    }
}
