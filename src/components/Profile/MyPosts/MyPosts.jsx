import React from "react";
import style from './MyPosts.module.css';
import Post from "./OldPost/Post";
import AddPost from "./AddPost/AddPost";
const MyPosts = () => {
    //типо из бд данные получили
    let postData=[
        {id:1, message:"Единственный способ сделать это - это сделать.",likesCount:11, date:"05.03.1999"},
        {id:1, message:"Ты должен любить танцы, чтобы придерживаться этого. Это ничего не дает, никаких рукописей для хранения, никаких картин для показа на стенах и, возможно, висят в музеях, никаких поэм для печати и продажи, ничего, кроме этого мимолетного момента, когда вы чувствуете себя живым. Это не для неустойчивых душ.",likesCount:39,date:'25.10.1929'},
    ];
    let postElements=postData.map(post=><Post message={post.message} likesCount={post.likesCount} date={post.date}/>)
    return <div className="">
                <AddPost/>
                <div className={style.posts}>
                    {postElements}               
                </div>
            </div>
}

export default MyPosts;