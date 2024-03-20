import React from "react";
import style from './DialogName.module.css';
import { NavLink } from "react-router-dom";

const DialogName=(props)=>{
    return(
        <div className={style.dialog}>
            <NavLink to={"/dialogs/"+props.id} className={({ isActive }) => isActive ? `${style.active}` : ""}>{props.name}</NavLink>
        </div>
    )
}

export default DialogName;