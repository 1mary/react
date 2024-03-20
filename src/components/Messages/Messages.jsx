import React from "react";
import style from './Messages.module.css';
import { NavLink } from "react-router-dom";
import DialogName from "./DialogName/DialogName";
import Message from "./Message/Message";


const Messages = () => {
    //типо данные из бд, придут в пропсе
    let dialogsNameData=[
        {id:1, name:"DanЯ"},
        {id:2, name:"Andrey"},
        {id:3, name:"Sasha"},
        {id:4, name:"Viktor"},
    ];
    let messageData=[
        {id:1, message:"Я прилетел в Питер"},
        {id:2, message:"Привет"},
        {id:3, message:"Sasha"},
        {id:4, message:"yo"},
    ];
    //массив jsx элементов
    let dialogsNameElements=dialogsNameData.map( dialog=><DialogName name={dialog.name} id={dialog.id}/>);
    let messageElements=messageData.map(message=><Message message={message.message}/>)
    return <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsNameElements}
                </div>
                <div className={style.messages}>
                    {messageElements}
                </div>                    
            </div>
}

export default Messages;