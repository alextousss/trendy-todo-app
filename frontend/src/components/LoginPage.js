import React, { Component } from 'react';
import { Button, Input, Form, Grid } from 'semantic-ui-react'
import { history } from './../store.js'


class LoginPage extends Component {
    constructor(props)  {
        super(props)
    }
    
    componentWillMount() {
        if (this.props.user.authenticated) {
            this.props.history.replace({pathname: '/'})
        }
    }
 
    render() {
        let login_input;
        let password_input;
        return(
            <Grid doubling columns={5} centered>
                <Grid.Column>
                    <p> {this.props.user.error} </p> 
                    <Form onSubmit={(e) => {
                        e.preventDefault()
                        this.props.onSubmit(login_input.inputRef.value, password_input.inputRef.value)
                    }}>
                        <Form.Field>
                            <Input ref={node => { 
                                    login_input = node;
                                }}
                                type="text"
                                placeholder="Userame"
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input ref={node => {
                                    password_input = node;
                                }} 
                                type="password" 
                                placeholder="Password" 
                            />
                            <br />
                        </Form.Field>
                        <Button content='Log In' />
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }    
}

export default LoginPage
