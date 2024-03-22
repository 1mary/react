import React from "react";
import style from './Search.module.css';
import search from "./img/search.png";
const Search = () => {
    return (
        <div className={`${style.blockSearch} headerBlock`}>
            <form className={style["search-form"]}>
                <input type="search" placeholder="Search" className={style["search-input"]}/>
                    <button type="submit" className={style["search-button"]}>
                       <img className={style.search} src={search} alt="" />
                    </button>
            </form>
            <i className="fa-solid fa-neuter"></i>
        </div>
    )
}

export default Search;