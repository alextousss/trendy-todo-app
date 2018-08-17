import React from 'react';
import { Table, Button } from 'semantic-ui-react'

const TodoView = ({todo, onClick}) => {
    return(
        <Table.Row>
            <Table.Cell>
                {todo.content}
                <Button content='X' className="ui right floated" onClick={() => onClick(todo.id)} />
            </Table.Cell>
        </Table.Row>
    )
}

export default TodoView;
