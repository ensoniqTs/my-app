
let initialState = {
    MessageElement: [
        { pMessage: 'Hi this a new message', likeCount: '15', id: '1' },
        { pMessage: 'This is second message', likeCount: '15', id: '2' }
    ],
    newPostText: ''
}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                pMessage: state.newPostText,
                id: '3',
                likeCount: '11'
            }
            state.MessageElement.push(newPost)
            state.newPostText = ''
            return state
        case 'CHANGE-POST':
            state.newPostText = action.newChangePostText
            return state
        default: return state
    }
}


export default profileReduser