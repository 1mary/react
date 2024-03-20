//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className={style["app-wrapper"]}>
      <div className={style.container}>
        <Header/>
        <Navbar/>
        <div className={style["app-wrapper-content"]}>
          <Routes>
            <Route path='/profile' Component={Profile}/>
            <Route path='/dialogs/*' Component={Messages}/>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
