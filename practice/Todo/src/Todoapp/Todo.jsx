import { useState } from "react";
import DisplayTasks from "./Displaytasks";
import FormInput from "./Forminput";

// main file
const TodoApp = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
        }
    };

    return (
        <div>
            <h1>Todo App</h1>
            <FormInput onAddTask={addTask} />
            <DisplayTasks tasks={tasks} />
        </div>
    );
};



export default TodoApp;