import React, { Component} from 'react'
import { Route } from 'react-router-dom'
import Login from '../containers/Login'
import AddTodo from '../containers/AddTodo'
import ListTodo from '../containers/ListTodo'
import TodoTitle from './TodoTitle'
import LogoutButton from './LogoutButton'
import { logout } from './../actions/user'


import { Container,  Divider, Grid } from 'semantic-ui-react'

import store from '../store'

function requireAuth (WrappedComponent) {
    return class extends Component { 
        componentWillMount() {
            if(!store.getState().user.authenticated) {
                this.props.history.replace({ pathname: '/login' })
            }
        }

        render() {
            return(
                <WrappedComponent {...this.props} />
            )
        }
    }
}

const Todo = () => {
    return (
        <div>
            <AddTodo />
            <ListTodo />
        </div>
    )
}


const App = () => {
    return(
        <Container>
            <br/>
            <header>
                <Grid>
                    <Grid.Column>
                        <TodoTitle />
                    </Grid.Column>
                    <Grid.Column floated='right' width={2}>
                        <LogoutButton
                            onClick = {() => {
                                store.dispatch(logout())
                            }} 
                            authenticated = {store.getState().user.authenticated} 
                        />
                    </Grid.Column>
                </Grid>
            </header>
            <Divider  />
            <main>
                <Route exact path="/" component={requireAuth(Todo)} />
                <Route exact path="/login" component={Login} />
            </main>
        </Container>
    )
}


export default App
