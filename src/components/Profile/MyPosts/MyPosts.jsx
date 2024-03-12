import React from "react";
import style from './MyPosts.module.css';
import Post from "./OldPost/Post";
import AddPost from "./AddPost/AddPost";
const MyPosts = () => {
    return <div className="">
                <AddPost/>
                <div className={style.posts}>
                    <Post message="Единственный способ сделать это - это сделать." likesCount='0' date='05.12.1930'/>
                    <Post message="Ты должен любить танцы, чтобы придерживаться этого. Это ничего не дает, никаких рукописей для хранения, никаких картин для показа на стенах и, возможно, висят в музеях, никаких поэм для печати и продажи, ничего, кроме этого мимолетного момента, когда вы чувствуете себя живым. Это не для неустойчивых душ.


" likesCount='15' date='25.10.1929'/>
                </div>
            </div>
}

export default MyPosts;