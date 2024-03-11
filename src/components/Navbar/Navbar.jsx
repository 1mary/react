import React from "react";
import style from './Navbar.module.css';
import messages from "./img/messages.png";
import profile from "./img/profile.png";
const Navbar = () => {
    return <nav className={style.nav}>
        <div className={`${style.item} ${style.active}`}>
            <a href="#">
            <img src={profile} alt="messages" />
                Profile
            </a>
        </div>
        <div className={style.item}>
            <a href="#">
                {/* <img src={messages} alt="messages" /> */}
                Messages</a>
        </div>
        <div className={style.item}><a href="#">News</a></div>
        <div className={style.item}><a href="#">Music</a></div>
        <div className={style.item}><a href="#">Settings</a></div>
    </nav>
}

export default Navbar;