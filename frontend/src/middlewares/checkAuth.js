import { 
    LOGOUT,
    GET_TOKEN_SUCCESS,
    logout
} from './../actions/user'

import { history } from './../store'

function checkAuthMiddleware() {
    return store => next => action => {

        if(action.type == GET_TOKEN_SUCCESS) { 
            next(action);
            history.push('/');
        }

       if(action.type == LOGOUT) { 
            next(action);
            history.push('/login');
        }


        if(action.response != undefined && action.response.status == 401) {
            store.dispatch(logout());           
            history.push('/login');
        }

        next(action)
    }
}

export default checkAuthMiddleware;
