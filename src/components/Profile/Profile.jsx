import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return <div className="content">
        <div className="">
            <img src="https://kartinki.pics/uploads/posts/2021-07/thumbs/1626730773_26-kartinkin-com-p-fon-sots-seti-krasivo-26.jpg" alt="" />
        </div>
        <div className="">
            ava+descr
        </div>
        <MyPosts/>
    </div>
}

export default Profile;