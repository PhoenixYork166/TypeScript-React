import React, { useRef, useEffect } from 'react';

import './NewTodo.css';

interface NewTodoProps {
    // onAddTodo = a callback returning nothing
    // and push a new object into prevTodos
    onAddTodo: (text: string) => void;
}

const NewTodo: React.FunctionComponent<NewTodoProps> = ( props ) => {
    const { onAddTodo } = props;

    const textInputRef = useRef<HTMLInputElement>(null);
    
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault(); // avoid sending a real request

        // getting values from <input type="text" id="todo-text" ref={textInputRef} />
        const enteredText = textInputRef.current!.value;
        console.log(`enteredText`);
        console.log(enteredText);

        onAddTodo(enteredText);
        // Clear <input> values after submission
        textInputRef.current!.value = '';
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

export default NewTodo;