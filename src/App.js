//import logo from './logo.svg';
import style from './App.module.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className={style["app-wrapper"]}>
      <div className={style.container}>
        <Header/>
        <Navbar/>
        <div className={style["app-wrapper-content"]}>
          {/* <Profile/> */}
          <Messages/>
        </div>
      </div>
    </div>
  );
}

export default App;
