import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // fixed
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // fixed
    addUser: () => void // fixed
    error: string // fixed
    totalUsers: number // fixed
    users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error: s.inputClass // fixed

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} />
            <span className={s.errorText}>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <ul>{users.map(u => <li key={u._id}>{u.name}</li>)}</ul>
        </div>
    )
}

export default Greeting
