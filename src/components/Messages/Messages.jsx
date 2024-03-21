import React from "react";
import style from './Messages.module.css';
import { NavLink } from "react-router-dom";
import DialogName from "./DialogName/DialogName";
import Message from "./Message/Message";


const Messages = (props) => {

    //массив jsx элементов
    let dialogsNameElements=props.state.dialogsNameData.map( dialog=><DialogName name={dialog.name} id={dialog.id}/>);
    let messageElements=props.state.messageData.map(message=><Message message={message.message}/>)
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