import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any -COMPLETED
    deleteAffairCallback: (_id: number)=>void // need to fix any -COMPLETED
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)} // need to fix -COMPLETED

    return (
        <div>
            <span>{props.affair.name}</span>
            <span>{props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
