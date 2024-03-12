import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Info from "./Information/Info";
import fon from "./img/fon.jpg"
const Profile = () => {
    return <div className="content">
                <div className={style.block_fon}>
                    <img src={fon} alt="" className={style.fon}/>
                </div>
                <Info/>
                <MyPosts/>
            </div>
}

export default Profile;