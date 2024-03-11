import React from "react";
import style from './Login.module.css';
const Login = () => {
    return (
            <div className={`${style.blockLogin} headerBlock`}>
                <a href="" className={style["login"]}>Log in</a>
                <a href="" className={style["signup"]}>Sign up</a>
            </div>
        )
}

export default Login;