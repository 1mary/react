import React from "react";
import style from './Logo.module.css';
// import logo from "./img/clever-logo.png";
import logo from "./img/logonew.png";
const Logo = () => {
    return (
            <div className={`${style.blockLogo} headerBlock`}>
                <img src={logo} alt="logo" />
            </div>
            )
}
export default Logo;