export default function TaskList({ tasks, removeTask }) {
    return (
        <ul className="space-y-2">
            {tasks.map((task, index) => (
                <li
                    key={index}
                    className="flex justify-between items-center p-2 border rounded"
                >
                    <span>{task}</span>
                    <button
                        onClick={() => removeTask(index)}
                        className="bg-red-500 p-2"
                    >
                        ✖
                    </button>
                </li>
            ))}
        </ul>
    );
}