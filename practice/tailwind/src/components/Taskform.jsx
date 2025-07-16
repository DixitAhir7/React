import { useState } from 'react';
import TaskList from './TaskList';

export default function Taskform() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md p-6 rounded-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Task List</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        className="flex-1 border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter a task"
                    />
                    <button
                        onClick={addTask}
                        className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-orange-400"
                    >
                        Add
                    </button>
                </div>
                <TaskList tasks={tasks} removeTask={removeTask} />
            </div>
        </div>
    );
}