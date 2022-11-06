import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { MdOutlineClose } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'

function TodoTask({ tasks, completeTask, removeTask, updateTask }) {
    const [editTask, setEditTask] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateTask(editTask.id, value)
        setEditTask({
            id: null,
            value: ''
        })
    };

    if (editTask.id) {
        return <TodoForm editTask={editTask} onSubmit={submitUpdate} />
    };

    return tasks.map((task, index) => (
        <div className={task.isComplete ? 'taskItem complete' : 'taskItem'} key={index}>
            <div className="task-info">
                <input type='checkbox' onChange={() => completeTask(task.id)} />
                <div key={task.id} >
                    {task.text}
                </div>
            </div>
            <div className='icons'>
                <MdOutlineClose
                    onClick={() => removeTask(task.id)}
                    className='delete-task-icon'
                />
                <BiEditAlt
                    onClick={() => setEditTask({
                        id: task.id,
                        value: task.text
                    })}
                    className='edit-task-icon '
                />
            </div>
        </div>
    ))
}

export default TodoTask