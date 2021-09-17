import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.leftColumn}>
                <img src={props.avatar} alt="ava"/>
            </div>
            <div className={s.rightColumn}>
                <div className={s.messageArea}>
                    <div className={s.firstName}>
                        {props.name}
                    </div>
                    <div className={s.messageData}>
                        <div className={s.messageText}>
                            {props.message}
                        </div>
                        <div className={s.messageTime}>
                            {props.time}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
