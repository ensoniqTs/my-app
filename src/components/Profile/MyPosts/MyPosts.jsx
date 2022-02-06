import React from 'react'
import s from './MyPosts.module.css'
import MyPost from './Post/Post'





const MyPosts = (props) => {
    let postElement = props.Post.MessageElement.map(e => <MyPost postElem={e.pMessage} likeCount={e.likeCount} />)

    let newPostElement = React.createRef()
    let f = () => {
        props.addPost() 
    } 
    let postChange = () => {
        let text = newPostElement.current.value
        props.changeNewText(text)
    }  
    return (
        <div className={s.item}>
            <div>
                <textarea ref={newPostElement} onChange={postChange} value={props.Post.newPostText}/>
            </div>
            <div>
                <button onClick={f}>add</button>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts