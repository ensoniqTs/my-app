import style from '.././profile.module.css'

import MyPostsContainer from './MyPosts/MyPosts_continer'

const Profile = (props) => {

    return (
        <div className={style.main__content}>
            <div>
                <   img src='https://www.w3schools.com/css/img_5terre_wide.jpg' alt='111' />
            </div>
            <MyPostsContainer Post={props.pMessage} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile