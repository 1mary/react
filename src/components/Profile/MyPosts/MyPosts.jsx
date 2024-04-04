import React from "react";
import style from './MyPosts.module.css';
import Post from "./OldPost/Post";
import AddPost from "./AddPost/AddPost";
const MyPosts = (props) => {
    let postElements=props.postData.map(post=><Post message={post.message} likesCount={post.likesCount} date={post.date}/>);
    return <div className="">
                <AddPost addPost={props.addPost} newPostText={props.newPostText} newTextPost={props.newTextPost}/>
                <div className={style.posts}>
                    {postElements}               
                </div>
            </div>
}

export default MyPosts;