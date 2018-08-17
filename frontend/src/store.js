import { createStore, compose, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers/'
import checkAuthMiddleware from './middlewares/checkAuth'


export let history = createHistory()

const middlewares = [
    thunk,
    routerMiddleware(history),
    checkAuthMiddleware(),
]

let store = createStore(
    connectRouter(history)(reducers),
    compose(
        applyMiddleware(...middlewares),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
);

export default store;
