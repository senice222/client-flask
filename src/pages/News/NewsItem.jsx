import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './News.module.scss'
import {parseCookies} from "nookies";
import basket from '../../assets/icons8-delete-64.png'
import {Button} from "antd";
import {useTranslation} from "react-i18next";

const NewsItem = ({title, img, description, id, date, handleDelete}) => {
    const cookies = parseCookies()
    const [show, setShow] = useState(false)
    const {t} = useTranslation()


    const handleOk = () => {
        handleDelete()
        setShow(false)
    }

    return (
        <div className={style.newsItem}>
            <NavLink to={`/news/${id}`}><img className={style.newsImage} src={`${img}`} alt="News"/></NavLink>
            <div className={style.newsContent}>
                <h2 className={style.newsTitle}>{title}</h2>
                <p className={style.newsDescription}>{description}</p>
                <p className={style.newsDate}>{date}</p>
                <NavLink className={style.readMore} to={`/news/${id}`}>{t("readMore")}</NavLink>
            </div>
            <div className={style.deleteContainer}>
                { cookies.admin && (
                    <div className={style.editContainer}>
                        <NavLink to={`/edit_news/${id}`} className={style.readMore}>Edit current news</NavLink>
                        <img src={basket} alt={'/'} onClick={() => setShow(!show)} className={style.deleteIcon} />
                    </div>
                ) }
                {
                    show && (
                        <div style={{marginRight: "15px"}}>
                            <h4>{t("areYouSure")}</h4>
                            <div className={style.deleteBtns}>
                                <Button type="primary" danger className={style.btnOk} onClick={handleOk}>Так</Button>
                                <Button type="primary" className={style.btnCancel} onClick={() => setShow(false)}>Нi</Button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default NewsItem;
