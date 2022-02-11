import React from 'react'
import s from './MyPosts.module.css'
import MyPost from './Post/Post'
import MyPosts from './MyPosts'





const MyPostsContainer = (props) => {
    // let postElement = props.Post.MessageElement.map(e => <MyPost postElem={e.pMessage} likeCount={e.likeCount} />)

    // let newPostElement = React.createRef()
    let f = () => {
        props.dispatch({ type: 'ADD-POST' })
    }
    let postChange = (text) => {
        // let text = newPostElement.current.value
        props.dispatch({ type: 'CHANGE-POST', newChangePostText: text })
    }
    return (
        <MyPosts newChangePost={postChange} addPost={f} />
    )
}
export default MyPostsContainer