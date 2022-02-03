import s from './MyPost.module.css'
const MyPost = (props) => {
    return (
        <div className={s.item}>
            {props.postElem}
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    )
}
export default MyPost