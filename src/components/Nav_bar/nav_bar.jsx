import nstyle from '.././nav_bar.module.css'
const Nav_bar = () => {
    return (
        <nav className={nstyle.nav__bar}>
            <div className={nstyle.item}>
                <a>Profile</a>
            </div>
            <div className={nstyle.item}>
                <a>Messages</a>
            </div>
            <div className={nstyle.item}>
                <a>News</a>
            </div>
            <div className={nstyle.item}>
                <a>Music</a>
            </div>
            <div className={nstyle.item}>
                <a>Setings</a>
            </div>
        </nav>
    )
}

export default Nav_bar

