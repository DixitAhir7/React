import { useTodo } from "../Provider"

export default function Displaytodo() {

    const { todoData } = useTodo();

    return (
        <ul>
            {
                todoData.map((item) => (
                    <li key={item.id}>{item.todoTask}</li>
                ))
            }
        </ul>
    )
};