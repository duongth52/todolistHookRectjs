import React from 'react';

const TodoList = ( { todos, deleteTodo  }) => {

    var dTodo = (index) => {
        deleteTodo(index)

    }

    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return(
                        <li key={index}>{todo} <span onClick= { () => dTodo(index) }>DELETE</span></li>
                    )
                })
            }
        </ul>
    );
}

export default TodoList;
