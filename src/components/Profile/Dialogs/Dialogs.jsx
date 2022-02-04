import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'



const act = dAct => dAct.isActive ? s.active : s.dialog

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        < div >
            <NavLink to={path} className={act}>{props.name}</NavLink>
        </div >
    )
}

const Messages = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
// const inputMessage = (props) => {

//     return (
//         <div>
//             <textarea ref={newMessage}></textarea>
//             <input onClick={send}>Send</input>
//         </div>
//     )
// }



const Dialogs = (props) => {
    let messageElement = props.message.map(e => <Messages message={e.message} id={e.id} />)
    let DialogsElement = props.dialogs.map(e => < DialogItem name={e.name} id={e.id} />)
    let newMessage = React.createRef()
    let send = () => {
        let text = newMessage.current.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div>
                    <textarea ref={newMessage}></textarea>
                    <button onClick={send}>add</button>
                </div>
            </div>


        </div >
    )
}

export default Dialogs