import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoTask from './TodoTask';

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        const newTodoList = [...tasks, task];
        setTasks(newTodoList);
    }

    const completeTask = (id) => {
        let updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        });
        setTasks(updatedTasks);
    }

    const removeTask = (id) => {
        const removeList = [...tasks].filter((task) => task.id !== id)
        setTasks(removeList);
    }

    const updateTask = (taskId, newValue) => {
        setTasks((prev) => prev.map((task) => (task.id === taskId ? newValue : task)));
    }

    console.log(tasks)

    return (
        <div className='to-do-list'>
            <h1>Список задач</h1>
            <TodoForm onSubmit={addTask} />
            <TodoTask
                tasks={tasks}
                completeTask={completeTask}
                removeTask={removeTask}
                updateTask={updateTask}
            />
        </div>
    )
}

export default TodoList