import { createContext, useContext, useReducer } from "react";
import { v4 } from 'uuid';

const todoContext = createContext('');

function Provider({ children }) {

    const defaultValue = [
        {
            id: v4(),
            todoTask: [],
        }
    ]

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return { ...state, todoTask: [action.payload] }
            case 'delete':
                state.todoTask.filter((item) => {
                    return item.id !== state.todoTask
                })
                break
            default:
                return state
        }
    }

    const [todoData, dispatch] = useReducer(reducer, defaultValue);

    return (
        <todoContext.Provider value={{ todoData, dispatch }}>
            {children}
        </todoContext.Provider>
    )
}

export default Provider;

export const useTodo = () => useContext(todoContext);