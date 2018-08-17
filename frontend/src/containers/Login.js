import LoginPage from '../components/LoginPage'

import { connect } from 'react-redux'
import { getToken, logout } from '../actions/user'


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (username, password) => {
            dispatch(getToken(username, password))
        },
        onLogout: () => {
            dispatch(logout())   
        }
    }
}

let Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default Login
