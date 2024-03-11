import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import fon from "./img/fon.jpg"
const Profile = () => {
    return <div className="content">
                <div className={style.block_fon}>
                    <img src={fon} alt="" className={style.fon}/>
                </div>
                <div className="">
                    ava+descr
                </div>
                <MyPosts/>
            </div>
}

export default Profile;