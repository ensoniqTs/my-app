const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE = 'CHANGE-MESSAGE'

let initialState = {
    messageItem: [
        { message: 'Привет, как дела?', id: '1' },
        { message: 'Что нового?', id: '2' }
    ],
    newMessage: '',
    dialogsItem: [
        { name: 'Олег', id: '1' },
        { name: 'Таня', id: '2' },
        { name: 'Макс', id: '3' },
        { name: 'Саша', id: '4' }
    ]
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessage,
                id: '3',
            }
            state.messageItem.push(newMessage)
            state.newMessage = ''
            return state
        case CHANGE_MESSAGE:
            state.newMessage = action.newText
            return state

        default: return state
    }

}
export const actionAddMessage = () => {
    return { type: ADD_MESSAGE }
}

export const actionMessageChange = (text) => {
    return {
        type: CHANGE_MESSAGE,
        newText: text
    }
}


export default dialogsReduser
