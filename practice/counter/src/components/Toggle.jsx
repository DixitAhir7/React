import { useReducer } from "react"

export default function Toggle() {

    const handleToggle = (state, action) => {
        if (action) {
            return !state
        }
    }

    const [isToggle, dispatchtoggle] = useReducer(handleToggle, false)

    return (
        <>
            <button onClick={() => dispatchtoggle({ type: !false })}>toggle</button>
            {isToggle ? 'true' : 'false'}
        </>
    )
};