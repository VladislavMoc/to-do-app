import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.editTask ? props.editTask.value : '');

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
            id: props.editTask ? props.editTask.id : Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    }

    return (
        <form className='task-input-form' onSubmit={handleSubmit}>
            <textarea
                type='text'
                value={input}
                onChange={handleChange}
                placeholder={(props.editTask) ? 'Внесите корректировку в задачу' : 'Введите новую задачу'}
                name='text'
                ref={inputRef}>
            </textarea>
            <input 
            type='submit' 
            className='task-submit-button' 
            value={(props.editTask) ? 'Добавить корректировку' : 'Добавить задачу'} 
            />
        </form>
    )
}

export default TodoForm