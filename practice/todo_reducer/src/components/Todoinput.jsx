import { useState } from "react";
import { useTodo } from "../Provider"

function Todoinput() {

    const { dispatch } = useTodo();
    const [input, setInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'add', payload : input })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" />
            <input type="submit" value="submit" />
        </form>
    )
}

export default Todoinput