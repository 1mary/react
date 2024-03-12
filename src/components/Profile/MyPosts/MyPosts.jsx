import React from "react";
import style from './MyPosts.module.css';
import Post from "./OldPost/Post";
import AddPost from "./AddPost/AddPost";
const MyPosts = () => {
    return <div className="">
                <AddPost/>
                <div className={style.posts}>
                    <Post message="Hi, how are you?" likesCount='0'/>
                    <Post message="It's my first post" likesCount='15'/>
                </div>
            </div>
}

export default MyPosts;