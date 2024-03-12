import React from "react";
import style from './Post.module.css';
const Post = (props) => {
    return(
        <div className={style.item}>
            <img src="https://img.freepik.com/premium-psd/3d-render-of-avatar-character_23-2150611774.jpg" alt="" />
            {props.message}
            <div className="">
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;