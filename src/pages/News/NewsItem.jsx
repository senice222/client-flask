import React from 'react';
import {NavLink} from "react-router-dom";
import style from './News.module.scss'
import {parseCookies} from "nookies";
import basket from '../../assets/icons8-delete-64.png'

const NewsItem = ({title, img, description, id, date, handleDelete}) => {
    const cookies = parseCookies()
    // сделать проверку imgUrl ? imgUrl : `port4era:${img_file}`
    return (
        <div className={style.newsItem}>
            <NavLink to={`/news/${id}`}><img className={style.newsImage} src={`${img}`} alt="News"/></NavLink>
            <div className={style.newsContent}>
                <h2 className={style.newsTitle}>{title}</h2>
                <p className={style.newsDescription}>{description}</p>
                <p className={style.newsDate}>{date}</p>
                <NavLink className={style.readMore} to={`/news/${id}`}>Read More</NavLink>
            </div>
            { cookies.admin && <img src={basket} alt={'/'} onClick={handleDelete} className={style.deleteIcon} /> }
        </div>
    );
};

export default NewsItem;
