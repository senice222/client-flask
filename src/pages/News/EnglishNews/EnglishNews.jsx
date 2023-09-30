import React, {useEffect, useState} from 'react';
import NewsItem from "../NewsItem";
import * as Api from "../../../api/news";

const EnglishNews = () => {
    const [news, setNews] = useState();

    useEffect(() => {
        try {
            const fetchEngNews = async () => {
                const data = await Api.getAllEnglishNews()
                setNews(data)
            }
            fetchEngNews()
        } catch (e) {
            console.log(e)
        }
    }, []);

    const handleDelete = async (id) => {
        try {
            await Api.deleteNews(id)
            news.filter(item => item.id !== news.id)
            window.location.reload();

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            {
                news?.map((item, i) => (
                    <NewsItem
                        id={item.id}
                        img={item.image_url}
                        description={item.description}
                        title={item.title}
                        key={i}
                        date={item.date}
                        handleDelete={() => handleDelete(item.id)}
                    />
                ))
            }
        </>
    );
};

export default EnglishNews;
