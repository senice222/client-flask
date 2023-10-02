import React, {useEffect, useState} from 'react';
import style from './DetailedNews.module.scss';
import * as Api from "../../api/news";
import {useParams} from "react-router-dom";

const DetailedNews = () => {
    const [news, setNews] = useState();
    const params = useParams()

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await Api.getDetailedNews(params.id)
                setNews(data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchNews()
        document.title = 'News..';
    }, [params.id]);
    // сделать проверку imgUrl ? imgUrl : `port4era:${img_file}`
    return (
        <div className={style.area}>
            <div className={style.newsContainer}>
                <img
                    src={news?.image_url }
                    alt="/" className={style.newsImage}
                />
                <div className={style.detailedNewsTitle}>{news?.title}</div>

                <div className={style.detailedNewsContent}>
                    <p>
                        {news?.text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailedNews;
