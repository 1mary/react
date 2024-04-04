import React from "react";
import style from './AddPost.module.css';

const AddPost = (props) => {
    var newPostElement=React.createRef();
    
    let addPost=(event)=>{
        event.preventDefault();
        props.addPost();
    };
    let newText=(event)=>{
        //event.preventDefault();
        var text=newPostElement.current.value;
        props.newTextPost(text);
    }
    return(
                <div className={style.new_post}>
                    <textarea ref={newPostElement} name="" id="" cols="30" rows="10" value={props.newPostText} onChange={newText}></textarea>
                    <a href="" className={`${style.btn_add} btn_main`}  onClick={addPost}>Add Post</a>
                </div>
    )     
}

export default AddPost;