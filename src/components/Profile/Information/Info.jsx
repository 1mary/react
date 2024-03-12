import React from "react";
import style from './Info.module.css';
import photo from "./img/photo1.jpg"
const Info = () => {
    return <div className={style.info_block}>
                <div className={style.avatar}>
                    <img src={photo} alt="" />
                </div>
                <div className={style.description}>
                    <div className={style.name}>Мерс Каннингем</div>
                    <div className={style.birthday}>
                        <span>Дата рождения: </span>
                        <span>16 апреля 1919</span>
                    </div>

                    <div className={style.city}>
                        <span>Город: </span>
                        <span>Нью-Йорк</span>
                    </div>
                    <div className={style.work}>
                        <span>Основная деятельность: </span>
                        <span>танцор, хореограф</span>
                    </div>
                </div>
            </div>
}

export default Info;