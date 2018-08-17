import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react'
let TodoForm = ({onClick}) => {
    let input;

    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault()
                onClick(input.inputRef.value)
                input.inputRef.value = ''
            }}>
                <Form.Field>
                <Input 
                    action={{content: 'Add Todo'}}
                    ref={node => {
                        input = node;
                    }} 
                />
                </Form.Field>
            </Form>
        </div>
 /*       <div className="input-group mb-3">
            <input className="form-control" ref={node => {
                input = node;
            }} />
            <div className="input-group-append">
                <button type="submit" className="btn btn-primary" onClick={() => {
                    onClick(input.value)
                    input.value = ''
                }}>
                +
                </button>
            </div>
        </div>*/

    )
}

export default TodoForm;
