import React, { useState, useRef, useEffect } from 'react';
import useTodos from './useTodos';  // Ensure this path is correct
import { v4 as uuidv4 } from 'uuid';
import style from './TodoPage.module.css';

const TodoPage = () => {
    const [input, setInput] = useState('');
    const [edit, setEdit] = useState(false);
    const [index2, setIndex] = useState(0);
    const [done, setDone] = useState([]);

    // Hook usage
    const { todos2, loading, error, setTodos } = useTodos();

    // Create a ref for the input field
    const inputRef = useRef(null);

    // Focus the input field on component mount
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [loading]);

    const DoneFunction = (index) => {
        setDone((prevDone) => [...prevDone, todos2[index]]);
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    const DeleteFunction = (index) => {
        setTodos(todos2.filter(todo => todo !== todos2[index]));
    };

    const EditFunction = (index) => {
        setInput(todos2[index]);
        setIndex(index);
        setEdit(true);
    };

    const UpdateFunction = (index) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo, i) => (i === index ? input : todo))
        );
        setEdit(false);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={style.page}>
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputRef} // Attach the ref to the input field
            />
            <button onClick={() => (edit ? UpdateFunction(index2) : setTodos([...todos2, input]))}>
                {edit ? 'Update' : 'Add'}
            </button>
            <ul className={style.list}>
                {todos2.length ? (
                    todos2.map((todo, index) => (
                        <li key={uuidv4()}>
                            {todo}
                            <div className={style.btns}>
                                <button onClick={() => DoneFunction(index)}> Done </button>
                                <button onClick={() => DeleteFunction(index)}> Delete </button>
                                <button onClick={() => EditFunction(index)}> Edit </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No todos</li>
                )}
            </ul>
            <h1>Done List</h1>
            <ul className={style.list}>
                {done.map((todo, index) => (
                    <li key={uuidv4()}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoPage;
