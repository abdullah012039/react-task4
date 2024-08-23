import { useState, useEffect, useRef } from 'react';

const useTodos = (refetch) => {
    const [todos2, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const fetchTodos = async () => {
        console.log('fetching');
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTodos(data.map(todo => todo.title));
            setSuccess(true);
        } catch (error) {
            setError(error.message);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return { todos2, loading, error , setTodos};
};

export default useTodos;
