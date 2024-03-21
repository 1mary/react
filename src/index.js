import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData=[
  {id:1, message:"Единственный способ сделать это - это сделать.",likesCount:11, date:"05.03.1999"},
  {id:1, message:"Ты должен любить танцы, чтобы придерживаться этого. Это ничего не дает, никаких рукописей для хранения, никаких картин для показа на стенах и, возможно, висят в музеях, никаких поэм для печати и продажи, ничего, кроме этого мимолетного момента, когда вы чувствуете себя живым. Это не для неустойчивых душ.",likesCount:39,date:'25.10.1929'},
];
let dialogsNameData=[
  {id:1, name:"DanЯ"},
  {id:2, name:"Andrey"},
  {id:3, name:"Sasha"},
  {id:4, name:"Viktor"},
];
let messageData=[
  {id:1, message:"Я прилетел в Питер"},
  {id:2, message:"Привет"},
  {id:3, message:"Sasha"},
  {id:4, message:"yo"},
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogsNameData={dialogsNameData} messageData={messageData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
