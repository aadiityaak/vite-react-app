import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';

export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTask] = useState([]);

    function handleAddTask(e) {
        e.preventDefault();

        setTask((prevTasks) => [
            ...prevTasks,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                complete: false,
            },
        ]);
        setNewTask('');
    }

    function handleCompleteTask(id) {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });
        setTask(updateTask);
    }

    function handleRemoveTask(id) {
        const removeTask = tasks.filter((task) => task.id !== id);
        setTask(removeTask);
    }

    return (
        <Card>
            <Card.Title>Todo</Card.Title>
            <Card.Body>
                <form>
                    <div className='flex items-center gap-x-2'>
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleAddTask} text='Add Task' />
                    </div>
                </form>
                {tasks.length > 0 ? (
                    <ol className='space-y-2 my-5'>
                        {tasks.map((task) => (
                            <li key={task.id} className='flex items-center justify-between'>
                                <span>
                                    {task.name} {task.completed ? '✅' : '❌'}
                                </span>
                                <div class='flex items-center gap-x-2'>
                                    <button onClick={() => handleCompleteTask(task.id)} className='px-2 py-1 border text-xs rounded'>
                                        Mark as {task.completed ? 'incomplete' : 'complete' }
                                    </button>
                                    <button onClick={() => handleRemoveTask(task.id)} className='px-2 py-1 border text-xs rounded'>
                                        remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>You have {tasks.length} tasks.</Card.Footer>
        </Card>
    );
}
