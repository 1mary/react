import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Info from "./Information/Info";
import fon from "./img/fon.jpg"
import { addPost } from "../../redux/state";
const Profile = (props) => {
    return <div className="content">
                <div className={style.block_fon}>
                    <img src={fon} alt="" className={style.fon}/>
                </div>
                <Info/>
                <MyPosts postData={props.state.postData} newPostText={props.state.newPostText} addPost={props.addPost} newTextPost={props.newTextPost}/>
            </div>
}

export default Profile;