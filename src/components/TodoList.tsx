import React from 'react';
import './TodoList.css';

// Approach 1
export interface TodoListProps {
    // key: {}[]; Array of Objects
    items: {
        id: number,
        text: string
    }[];

    onDeleteTodo: (id: number) => void;
}

// Approach 2
type Props = {
    items: {
        id: number,
        text: string
    }[];
}

// const TodoList: React.FunctionComponent<Approach1/Approach2> = ( props ) => { ... }
const TodoList: React.FunctionComponent<TodoListProps> = ( props ) => {
    // Destructuring all props from props
    const { items, onDeleteTodo } = props;

    return (
        <ul>
            {items.map(todo => (
                <li key={todo.id}>
                    <span>
                        {todo.text}
                    </span>
                    <button 
                        onClick={onDeleteTodo.bind(null, todo.id)}
                        className="buttonDel"
                    >
                            DELETE</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;