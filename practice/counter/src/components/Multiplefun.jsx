import { useReducer } from "react"

export default function Multiplefun() {

    const handleMultiple = (state, action) => {

    }

    const [multiple, dispatch] = useReducer(handleMultiple, '');

    return (
        <>
            <form>
                <input
                    value={multiple}
                    onChange={(e) => dispatch({ type: 'name', payload: e.target.value })}
                    type="text"
                />
            </form>
        </>
    )
};