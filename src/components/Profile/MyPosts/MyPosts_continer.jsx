import React from 'react'

import MyPosts from './MyPosts'





const MyPostsContainer = (props) => {
    let f = () => {
        props.dispatch({ type: 'ADD-POST' })

    }
    let postChange = (text) => {

        props.dispatch({ type: 'CHANGE-POST', newChangePostText: text })
    }
    return (
        <MyPosts newChangePost={postChange} addPosts={f} Post={props.Post} />
    )
}
export default MyPostsContainer