import s from './MyPosts.module.css'
import MyPost from './Post/Post'





const MyPosts = (props) => {
    let postElement = props.Post.map(e => <MyPost postElem={e.pMessage} likeCount={e.likeCount} />)
    return (
        <div className={s.item}>
            {postElement}
        </div>
    )
}
export default MyPosts