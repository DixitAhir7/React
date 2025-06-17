import { useState } from "react";
import TodoList from "./Displaytasks";
import FormInput from "./Forminput";

// main file
const TodoApp = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <h1>Todo App</h1>
            <FormInput onAddTask={addTask} />
            <TodoList tasks={tasks} />
        </div>
    );
};

export default TodoApp;