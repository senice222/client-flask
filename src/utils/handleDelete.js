import * as Api from "../api/news";

export const handleDelete = async (id, news) => {
    try {
        await Api.deleteNews(id)
        news.filter(item => item.id !== news.id)
        window.location.reload();
    } catch (e) {
        console.log(e)
    }
}