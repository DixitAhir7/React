import { useState } from "react";
import Todo from "./Todo";

function FormInput() {

    const [task, setTask] = useState([]);

    const handletask = (e) => {
        setTask(prevTask => [...prevTask, task]);
    };

    const handlesubmit = (e) => {
        e.preventDefault()
    };

    return (
        <>
            <form name="todoform" onSubmit={handlesubmit}>
                <input type="text" placeholder="Add Tasks" value={task} onChange={handletask} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
};

export default FormInput;