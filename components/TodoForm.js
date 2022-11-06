import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    }

    return (
        <form className='task-input-form' onSubmit={handleSubmit}>
            <input
                type='text'
                value={input}
                onChange={handleChange}
                placeholder='Введите задачу здесь'
                name='text'
                ref={inputRef}
                 />
            <input type='submit' className='task-submit-button' value='Submit task' />
        </form>
    )
}

export default TodoForm