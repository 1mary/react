import React from "react";
import style from './Post.module.css';
import photo from './../../Information/img/photo1.jpg';
import like from './../../img/like.png';
const Post = (props) => {
    return(
        <div className={style.item}>
            <img className={style.photo} src={photo} alt="" />
            <div className={style.message}>{props.message}</div>      
            <div className={style.feedback}>
                <div className={style.date}>{props.date}</div>
                <div className={style.like}>
                    <img src={like} alt="like" />
                    {props.likesCount}
                </div>
                
            </div>
        </div>
    )
}

export default Post;