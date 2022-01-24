import { NavLink } from 'react-router-dom'
import nstyle from '.././nav_bar.module.css'
const Nav_bar = () => {
    return (
        <nav className={nstyle.nav__bar}>
            <div className={nstyle.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={nstyle.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={nstyle.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={nstyle.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={nstyle.item}>
                <NavLink to='/setings'>Setings</NavLink>
            </div>
        </nav>
    )
}

export default Nav_bar

