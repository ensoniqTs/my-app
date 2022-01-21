import style from '.././profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={style.main__content}>
            <div>
                <   img src='https://www.w3schools.com/css/img_5terre_wide.jpg' alt='111' />
            </div>


            <MyPosts />
        </div>
    )
}

export default Profile