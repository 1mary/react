import { type } from "@testing-library/user-event/dist/type";
const ADD_POST="ADD-POST";
const NEW_TEXT="NEW-TEXT";

let store={
    _state:{
        profilePage:{
            postData:[
                {id:1, message:"Единственный способ сделать это - это сделать.",likesCount:11, date:"05.03.1999"},
                {id:1, message:"Ты должен любить танцы, чтобы придерживаться этого. Это ничего не дает, никаких рукописей для хранения, никаких картин для показа на стенах и, возможно, висят в музеях, никаких поэм для печати и продажи, ничего, кроме этого мимолетного момента, когда вы чувствуете себя живым. Это не для неустойчивых душ.",likesCount:39,date:'25.10.1929'},
            ],
            newPostText:""
        },
        messagesPage:{
            dialogsNameData:[
                {id:1, name:"DanЯ"},
                {id:2, name:"Andrey"},
                {id:3, name:"Sasha"},
                {id:4, name:"Viktor"},
            ],
            messageData:[
                {id:1, message:"Я прилетел в Питер"},
                {id:2, message:"Привет"},
                {id:3, message:"Sasha"},
                {id:4, message:"yo"},
            ]
        },
    },
    _callSubscriber(){},
    subscribe(observer){
        this._callSubscriber=observer;//наблюдатель
    },
    getState(){
        return this._state;
    },
    _addPost(){
        var newPost={
            id:5,
            message:this._state.profilePage.newPostText,
            likesCount:0
        };
        this._state.profilePage.postData.push(newPost);
        this._newTextPost("");
        this._callSubscriber(this._state);
    },
    _newTextPost(postMessage){
        this._state.profilePage.newPostText=postMessage;
        this._callSubscriber(this._state);
    },
    dispatch(action){
        if(action.type==="ADD-POST"){
            this._addPost();
        }else if(action.type==="NEW-TEXT"){
            this._newTextPost(action.newText);
        }
    },
}

export const addPostActionCreator=()=>({type:ADD_POST});
export const newTextActionCreator=(text)=>({type:NEW_TEXT, newText:text})
export default store;