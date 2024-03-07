import React from "react";
import style from './Header.module.css';
import './Header.css';
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Login from "./Login/Login";
const Header = () => {
    return (
    <header className={style.header}>
        <div className={style.container}>
            <Logo/>
            <Search/>
            <Login/>
        </div>
    </header>)
}

export default Header;