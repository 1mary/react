import React from "react";
import style from './Messages.module.css';
import { NavLink } from "react-router-dom";

const Messages = () => {
    return <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <div className={style.dialog + ' '+ style.active}>
                        <NavLink to="/dialogs/1">DanЯ</NavLink>
                    </div>
                    <div className={style.dialog}>
                        <NavLink to="/dialogs/2">Andrey</NavLink>
                    </div>
                    <div className={style.dialog}>
                        <NavLink to="/dialogs/3">Sasha</NavLink>
                    </div>
                    <div className={style.dialog}>
                        <NavLink to="/dialogs/4">Viktor</NavLink>
                    </div>
                </div>
                <div className={style.messages}>
                    <div className={style.message}>Я прилетел в Питер</div>
                    <div className={style.message}>Привет</div>
                    <div className={style.message}>yo</div>
                </div>                    
            </div>
}

export default Messages;