import React,  { Component } from 'react';
import TodoList from './todo-list';
import TodoForm from './todo-create';
import TodoTitle from './todo-title';

window.id = 0

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    content: "First todouuu",
                    id: window.id++
                },
                {
                    content: "Second toudouuu",
                    id:window.id++
                }
            ]
        }
    }
    
    handleRemove(id) {
        const remainder = this.state.data.filter((todo) => {
            if( todo.id !== id) 
                return todo;
        });
        this.setState({data: remainder});
    }

    addTodo(content) {
        if (content) {
            this.state.data.push({
                content: content,
                id: window.id++
            });
            this.setState({data: this.state.data});
        }
    }

    render () {
        return (
            <div className="container">
                <TodoTitle />
                <TodoForm 
                    addTodo={this.addTodo.bind(this)}
                />
                <TodoList
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        )
    }
}

export default TodoApp;
