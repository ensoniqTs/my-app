import React from 'react'
import s from './MyPosts.module.css'
import MyPost from './Post/Post'
import MyPostsContainer from './MyPosts_continer'





const MyPosts = (props) => {
    let postElement = props.Post.MessageElement.map(e => <MyPost postElem={e.pMessage} likeCount={e.likeCount} />)

    let newPostElement = React.createRef()
    // let f = () => {
    //     props.dispatch({ type: 'ADD-POST' })
    // }

    let text = newPostElement.current.value

    // let postChange = () => {
    //     let text = newPostElement.current.value
    //     props.dispatch({ type: 'CHANGE-POST', newChangePostText: text })
    // }
    return (
        <div className={s.item}>
            <div>
                <textarea ref={newPostElement} onChange={props.newChangePost(text)} value={props.Post.newPostText} placeholder='введите сообщение' />
            </div>
            <div>
                <button onClick={props.addPost}>add</button>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts