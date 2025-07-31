import { useReducer } from "react"

export default function Form() {

    const handleForm = (state, action) => {
        if (action.type === 'name') {
            return { ...state, name: action.payload }
        }
        else if (action.type === 'email') {
            return { ...state, email: action.payload }
        }
        else if (action.type === 'toggle') {
            return { ...state, toggle: action.payload }
        }
    }

    const [user, dispatch] = useReducer(handleForm, { name: '', email: '', toggle: false });

    return (
        <>
            <form className="mt-4">
                <input type="text"
                    value={user.name}
                    onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} placeholder="enter name" />
                <input type="text" placeholder="enter email"
                    value={user.email}
                    className="mt-2"
                    onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} />

                {/* <button onClick={(e) => dispatch({ type: 'toggle', payload: e.preventDefault() })}>toggle</button> */}
            </form>

            <div className="values">
                <h1>{user.name}</h1>
                <h1>{user.email}</h1>
            </div>
        </>
    )
};