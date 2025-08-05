import { useReducer } from "react"

export default function Counter() {

    const handleCount = (state, action) => {
        if (action.type === 'increment') {
            return state + 1
        }
        else if (action.type === 'decrement') {
            return state - 1
        }
    }

    const [count, dispatch] = useReducer(handleCount, 0);

    return (
        <>
            <div>
                <h1 className="text-2xl text-center uppercase">practice of usereducer</h1>
            </div>
            <div>
                <h1>count: {count}</h1>
                <div className="mt-2">
                    <button onClick={() => dispatch({ type: 'increment' })}>increse</button>
                    <button className="ml-2" onClick={() => dispatch({ type: 'decrement' })}>decrese</button>
                </div>
            </div>
        </>
    )
};