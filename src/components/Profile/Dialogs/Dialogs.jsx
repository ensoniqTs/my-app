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
        <div className={s.message}>{props.messg}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                < DialogItem name='Олег' id='1' />
                < DialogItem name='Таня' id='2' />
                < DialogItem name='Макс' id='3' />
                < DialogItem name='Александр' id='4' />
            </div>
            <div className={s.messages}>
                <Messages messg='Привет, как дела?' />
                <Messages messg='Здесь что-то новое!' />
            </div>
        </div >
    )
}

export default Dialogs