import { NavLink } from 'react-router-dom'
import nstyle from '.././nav_bar.module.css'
let act = navData => navData.isActive ? nstyle.active : nstyle.item
const Nav_bar = () => {
    return (
        <nav className={nstyle.nav__bar}>
            <div className={nstyle.item}>
                <NavLink to='/profile' className={act}>Profile</NavLink>
            </div>
            <div className={nstyle.item}>
                <NavLink to='/dialogs' className={act}>Messages</NavLink>
            </div>
            <div className={nstyle.item}>
                <NavLink to='/news' className={act}>News</NavLink>
            </div>
            <div className={nstyle.item}>
                <NavLink to='/music' className={act}>Music</NavLink>
            </div>
            <div className={nstyle.item}>
                <NavLink to='/setings' className={act}>Setings</NavLink>
            </div>
        </nav>
    )
}

export default Nav_bar

