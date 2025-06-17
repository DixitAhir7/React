import React from 'react';
import { MdCancel } from "react-icons/md";
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine } from "react-icons/ri";

const TodoList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    );
};

export default TodoList;