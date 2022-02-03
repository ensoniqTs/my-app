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




const Dialogs = (props) => {
    let messageElement = props.message.map(e => <Messages message={e.message} id={e.id} />)

    let DialogsElement = props.dialogs.map(e => < DialogItem name={e.name} id={e.id} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div >
    )
}

export default Dialogs