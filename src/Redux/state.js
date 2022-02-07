import dialogsReduser from "./dialogs_reduser"

const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE = 'CHANGE-MESSAGE'

let store = {
    rerenderTree() { },
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            MessageElement: [
                { pMessage: 'Hi this a new message', likeCount: '15', id: '1' },
                { pMessage: 'This is second message', likeCount: '15', id: '2' }
            ],
            newPostText: ''
        }

    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this.rerenderTree = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                message: this._state.dialogsPage.newMessage,
                id: '3',
            }
            this._state.dialogsPage.messageItem.push(newMessage)
            this._state.dialogsPage.newMessage = ''
            this.rerenderTree(this._state)
        } else if (action.type === 'CHANGE-MESSAGE') {
            this._state.dialogsPage.newMessage = action.newText
            this.rerenderTree(this._state)
        } else if (action.type === 'ADD-POST') {
            let newPost = {
                pMessage: this._state.profilePage.newPostText,
                id: '3',
                likeCount: '11'
            }
            this._state.profilePage.MessageElement.push(newPost)
            this._state.profilePage.newPostText = ''
            this.rerenderTree(this._state)
        } else if (action.type === 'CHANGE-POST') {
            this._state.profilePage.newPostText = action.newChangePostText
            this.rerenderTree(this._state)
        }
    },

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

export default store
window.store = store