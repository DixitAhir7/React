import React, { useState } from 'react'
import { NavLink } from 'react-router'

export default function Header() {

    const [name, setName] = useState('');

    const hadnleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h1>Header</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <form onSubmit={hadnleSubmit}>
                <input
                    style={{ display: 'block' }}
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    type="text"
                    placeholder='search user' />
                <button type='submit'>go</button>
            </form>
            <NavLink to={`/user/${name}`}>
                Go to User
            </NavLink>
        </div>
    )
}