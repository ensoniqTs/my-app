const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE = 'CHANGE-MESSAGE'

const dialogsReduser = (state, action) => {
    if (action.type === 'ADD-MESSAGE') {
        let newMessage = {
            message: state.dialogsPage.newMessage,
            id: '3',
        }
        state.dialogsPage.messageItem.push(newMessage)
        state.dialogsPage.newMessage = ''

    } else if (action.type === 'CHANGE-MESSAGE') {
        state.dialogsPage.newMessage = action.newText


        return state
    }
}


export default dialogsReduser
