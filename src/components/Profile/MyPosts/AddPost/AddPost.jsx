import React from "react";
import style from './AddPost.module.css';

const AddPost = (props) => {
    var newPostElement=React.createRef();
    
    let addPost=()=>{
        var text=newPostElement.current.value;
        props.addPost(text);
    };
    return(
                <div className={style.new_post}>
                    <textarea ref={newPostElement} name="" id="" cols="30" rows="10"></textarea>
                    <a href="" className={`${style.btn_add} btn_main`}  onClick={addPost}>Add Post</a>
                </div>
    )     
}

export default AddPost;