import classes from '.././header.module.css'
import Header_title from './Header_title'
const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://e7.pngegg.com/pngimages/630/64/png-clipart-house-logo-house-angle-building.png' alt='logo' />
            <div>
                <Header_title />
            </div>

        </header>
    )
}

export default Header