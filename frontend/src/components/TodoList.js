import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import TodoView from './TodoView';

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onMount()
    }


    render() { 
        const todoNode = this.props.todos.map((todo) => { 
            return (<TodoView todo={todo} key={todo.id} onClick={this.props.onClick}/>);
        });
        return (
            <Table celled>
                {todoNode}
            </Table>
        );
    }

}

export default TodoList


