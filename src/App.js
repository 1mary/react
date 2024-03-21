//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



function App(props) {
  return (
    <BrowserRouter>
    <div className={style["app-wrapper"]}>
      <div className={style.container}>
        <Header/>
        <Navbar/>
        <div className={style["app-wrapper-content"]}>
          <Routes>
            {/* <Route path='/profile' Component={Profile}/> */}
            <Route  path='/profile' element={<Profile postData={props.postData}/>}/>
            <Route path='/dialogs/*' element={<Messages dialogsNameData={props.dialogsNameData} messageData={props.messageData}/>}/>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
