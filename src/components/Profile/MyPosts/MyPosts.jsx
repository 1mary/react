import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
    return <div className="">
                my posts
                <div className="">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Add post</button>
                </div>
                <div className={style.posts}>
                    <Post message="Hi, how are you?" likesCount='0'/>
                    <Post message="It's my first post" likesCount='15'/>
                </div>
            </div>
}

export default MyPosts;