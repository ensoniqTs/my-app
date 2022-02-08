import dialogsReduser from "./dialogs_reduser"
import profileReduser from "./profile_reduser"

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

        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this.rerenderTree(this._state)
    },

}



export default store
window.store = store