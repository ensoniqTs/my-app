

// export let addNewMessage = () =>{
//     let newMessage = {
//         message: state.dialogsPage.newMessage,
//         id: '3', 
//     }
//     state.dialogsPage.messageItem.push(newMessage)
//     changeNewMessage('')
//     rerenderTree(state)
// }

// export let changeNewMessage = (newText) =>{
//     state.dialogsPage.newMessage = (newText)
//     rerenderTree(state)
// }


// export let addPost = () =>{
//     let newPost = {
//         pMessage: state.profilePage.newPostText,
//         id: '3',
//         likeCount: '11'
//     }
//     state.profilePage.MessageElement.push(newPost)
//     changeNewText('')
//     rerenderTree(state)
// }
// export let changeNewText = (newText) =>{

//     state.profilePage.newPostText = (newText)
//     rerenderTree(state)
// }

// export const subscribe = (observer) => {
//     rerenderTree = observer
// }

export let store = {
    rerenderTree() {}, 
    _state: {
        dialogsPage: {
            messageItem: [
                { message: 'Привет, как дела?', id: '1' },
                { message: 'Что нового?', id: '2' }
            ],
            newMessage:'sssssssssss',
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
            newPostText:'sssssss'
        }
    
    },
    getState() {
        return this._state
    },
    addNewMessage () {
        let newMessage = {
            message: this._state.dialogsPage.newMessage,
            id: '3', 
        }
        this._state.dialogsPage.messageItem.push(newMessage)
        this.changeNewMessage('')
        this.rerenderTree(this._state)
    },
    
    changeNewMessage (newText) {
        this._state.dialogsPage.newMessage = (newText)
        this.rerenderTree(this._state)
    },
    
    
    addPost() {
        let newPost = {
            pMessage: this._state.profilePage.newPostText,
            id: '3',
            likeCount: '11'
        }
        this._state.profilePage.MessageElement.push(newPost)
        this.changeNewText('')
        this.rerenderTree(this._state)
    },
    changeNewText (newText) {
    
        this._state.profilePage.newPostText = (newText)
        this.rerenderTree(this._state)
    },
    
    subscribe (observer) {
        this.rerenderTree = observer
    }
}

export default store