import React from "react";
import style from './Messages.module.css';

const Messages = () => {
    return <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <div className={style.dialog + ' '+ style.active}>DanЯ</div>
                    <div className={style.dialog}>Andrey</div>
                    <div className={style.dialog}>Sasha</div>
                    <div className={style.dialog}>Viktor</div>
                </div>
                <div className={style.messages}>
                    <div className={style.message}>Я прилетел в Питер</div>
                    <div className={style.message}>Привет</div>
                    <div className={style.message}>yo</div>
                </div>                    
            </div>
}

export default Messages;