import React from "react";
import style from './AddPost.module.css';

const AddPost = () => {
    var newPostElement=React.createRef();
    var addPost=()=>{
        var text=newPostElement.current.value;
        alert(text);
    };
    return(
                <div className={style.new_post}>
                    <textarea ref={newPostElement} name="" id="" cols="30" rows="10"></textarea>
                    <a href="" className={`${style.btn_add} btn_main`}  onClick={addPost}>Add Post</a>
                </div>
    )     
}

export default AddPost;