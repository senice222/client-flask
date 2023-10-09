import React, { useEffect, useState } from 'react';
import style from './DetailedNews.module.scss';
import * as Api from "../../api/news";
import { useParams } from "react-router-dom";
import { parse } from 'node-html-parser';

const DetailedNews = () => {
    const [news, setNews] = useState();
    const {id} = useParams()
    const [parsedText, setParsedText] = useState('');

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await Api.getDetailedNews(id)
                setNews(data);

                const parsedHTML = parse(data?.text);

                const parsedText = parsedHTML.toString();
                setParsedText(parsedText);
            } catch (e) {
                console.log(e)
            }
        }
        fetchNews()
        document.title = 'News..';
    }, [id]);

    return (
        <div className={style.area}>
            <div className={style.newsContainer}>
                <img
                    src={news?.image_url }
                    alt="/" className={style.newsImage}
                />
                <div className={style.detailedNewsTitle}>{news?.title}</div>

                <div
                    className={style.detailedNewsContent}
                    dangerouslySetInnerHTML={{ __html: parsedText }}
                />
            </div>
        </div>
    );
};

export default DetailedNews;
