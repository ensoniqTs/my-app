import s from './MyPosts.module.css'
import MyPost from './Post/MyPost'
const MyPosts = () => {
    return (
        <div className={s.item}>
            <MyPost message='Hi this a new message' likeCount='15' />
            <MyPost message='This is second message' likeCount='20' />
        </div>
    )
}
export default MyPosts