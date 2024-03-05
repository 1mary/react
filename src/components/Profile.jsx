import React from "react";
import style from './Profile.module.css';
const Profile = () => {
    return <div className="content">
        <div className="">
            <img src="https://kartinki.pics/uploads/posts/2021-07/thumbs/1626730773_26-kartinkin-com-p-fon-sots-seti-krasivo-26.jpg" alt="" />
        </div>
        <div className="">
            ava+descr
        </div>
        <div className="">
            my posts
            <div className="">
                new post
            </div>
            <div className={style.posts}>
                <div className={style.item}>post1</div>
                <div className={style.item}>post2</div>
            </div>
        </div>
    </div>
}

export default Profile;