import React from 'react'
import Dialogs from './Dialogs'
import { actionAddMessage, actionMessageChange } from '../../../Redux/dialogs_reduser'


const DialogsContainer = (props) => {
    debugger
    let send = () => {
        props.dispatch(actionAddMessage())

    }
    let messageChange = (text) => {

        props.dispatch(actionMessageChange(text))

    }

    return (
        <Dialogs sendMessage={send} changeMessage={messageChange} dialogs={props.dialogs} message={props.message} />
    )
}

export default DialogsContainer