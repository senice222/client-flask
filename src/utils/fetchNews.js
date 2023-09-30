import * as Api from "../api/news";

export const fetchNews = async (setNews) => {
    try {
        const data = await Api.getAllNews()
        setNews(data)
    } catch (e) {
        console.log(e)
    }
}