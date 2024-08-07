let rerenderEntireTree=()=>{}

var state={
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
    
}

export const addPost=()=>{
    var newPost={
        id:5,
        message:state.profilePage.newPostText,
        likesCount:0
    };
    state.profilePage.postData.push(newPost);
    newTextPost("");
    rerenderEntireTree(state);
}
export const newTextPost=(postMessage)=>{
    state.profilePage.newPostText=postMessage;
    rerenderEntireTree(state);
}

export const subscribe=(observer)=>{
    rerenderEntireTree=observer;//наблюдатель
} 
export default state;