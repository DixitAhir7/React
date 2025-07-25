import { useState } from "react";

const FormInput = ({ onAddTask }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default FormInput;