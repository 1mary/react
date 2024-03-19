import React from "react";
import style from './Navbar.module.css';
import messages from "./img/messages.png";
import profile from "./img/profile.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return <nav className={style.nav}>
        <div className={`${style.item}`}>
            <NavLink to="profile" className={({ isActive }) => isActive ? `${style.active}` : ""} >
            <img src={profile} alt="messages" />
                Profile
            </NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="dialogs" className={({ isActive }) => isActive ? `${style.active}` : ""}>
                {/* <img src={messages} alt="messages" /> */}
                Messages
            </NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="news" className={({ isActive }) => isActive ? `${style.active}` : ""}>News</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="music" className={({ isActive }) => isActive ? `${style.active}` : ""}>Music</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="settings" className={({ isActive }) => isActive ? `${style.active}` : ""}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;