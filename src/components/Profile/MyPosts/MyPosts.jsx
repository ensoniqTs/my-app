import React from 'react'
import s from './MyPosts.module.css'
import MyPost from './Post/Post'





const MyPosts = (props) => {
    let postElement = props.Post.map(e => <MyPost postElem={e.pMessage} likeCount={e.likeCount} />)

    let newPostElement = React.createRef()
    let f = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.item}>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={f}>add</button>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts